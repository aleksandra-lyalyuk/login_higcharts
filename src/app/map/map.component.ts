import {Component, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_map from 'highcharts/modules/map';
import worldMap from '@highcharts/map-collection/countries/ru/ru-all.geo.json';
import proj4 from 'proj4';
// import {AuthService} from "../services/auth.service";
import {DataService} from "../services/data.service";
import {finalize} from "rxjs/operators";

if (typeof Highcharts === 'object') {
  HC_map(Highcharts)
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  public Highchart = Highcharts;
  public chartMap: Highcharts.Options = {};
  public loading = true;

  constructor(
              private dataService: DataService) { }

  // private auth: AuthService,

  ngOnInit() {
    this.loading = true;
    // if (localStorage.getItem('login') !== 'true'){
    //   this.auth.logout()
    // }
    this.loadData();
  }

  private loadData() {
    this.dataService.getDataForMap()
      .pipe(finalize(() => this.loading = false))
      .subscribe((dots: any) => {
        this.createMapObject(dots.data);
      });
  }

  private createMapObject(dataForMap: Array<any>) {
    this.chartMap = {
      chart: {
        map: worldMap as any,
        proj4: proj4
      },
      title: {
        text: 'Highcharts basic demo'
      },
      subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ru/ru-all.js">Russia</a>'
      },
      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },
      legend: {
        enabled: true
      },
      colorAxis: {
        min: 0
      },
      series: [{
        name: 'Random data',
        states: {
          hover: {
            color: '#BADA55'
          }
        },
        dataLabels: {
          enabled: true,
          format: '{point.name}'
        },
        allAreas: false,
        data: dataForMap
      } as Highcharts.SeriesMapOptions,
        {
          // Specify points using lat/lon
          type: 'mappoint',
          name: 'Russia cities',
          marker: {
            radius: 5,
            fillColor: 'tomato'
          },
          data: [
            {
              name: 'Spb',
              lat: 59.9342802,
              lon: 30.3350986
            }
          ]
        } as Highcharts.SeriesMappointOptions]
    }
  }

  public logout(){
    // this.auth.logout()
  }
}
