import { Injectable } from '@angular/core';
import * as AuthActions from '../store/actions/auth.actions';
import { of, Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {

        let user = {username: username, pass: password};
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          return of(user);
        } else {
          return throwError('Unable to login');
        }
  }

}
