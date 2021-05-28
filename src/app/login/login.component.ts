import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../store";
import * as fromAuthActions from 'src/app/store/actions/auth.actions';
import {User} from "../modules/auth/auth";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  // user: User = new User()


  onSubmit(username: any, pass: any) {
    // console.log(username.value, pass.value)
    this.store.dispatch(
      fromAuthActions.loginPage({
        username: username.value,
        password: pass.value,
      })
    );
  }
}
