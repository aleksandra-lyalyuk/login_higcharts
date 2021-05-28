import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {JSONFile} from "@angular/cli/utilities/json-file";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  public getDataForMap(): Observable<any> {
    return this.httpClient.get('assets/data.json');
  }
}
