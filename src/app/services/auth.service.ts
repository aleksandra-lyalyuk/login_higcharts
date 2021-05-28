import { Injectable } from '@angular/core';
import * as AuthActions from '../store/actions/auth.actions';
import { of, Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  baseUrl: string = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {}
  //Fake Login API
  login(username: string, password: string): Observable<any> {
    return this.http.get(this.baseUrl + '?username=' + username).pipe(
      switchMap((users) => {
        let user = {username: username, pass: password};
        if (user) {
          localStorage.setItem('user', JSON.stringify(user))
          return of(user);
        } else {
          return throwError('Unable to login');
        }
      })
    );
  }
}
