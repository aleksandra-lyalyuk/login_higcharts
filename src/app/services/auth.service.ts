import { Injectable } from '@angular/core';
import * as AuthActions from '../store/actions/auth.actions';
import { of, Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import {user} from "../modules/auth/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

    private auth ={
        username: 'Admin',
        pass: 'Pa$$word'
    }

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<any> {

        let auth = {username: username, pass: password};
        if (auth.username === user.username && auth.pass === user.pass) {
          localStorage.setItem('login', 'true')
            this.router.navigate(['/map'])
          return of('true');
        } else {
          return of('Unable to login');
        }
  }

  logout(){
      localStorage.setItem('login', 'false')
      this.router.navigate(['/login'])
  }
}
