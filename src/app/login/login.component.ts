import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../store";
import * as fromAuthActions from 'src/app/store/actions/auth.actions';
import {User} from "../modules/auth/auth";
import {AuthService} from "../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public err = false;

  constructor(private store: Store<AppState>, private auth: AuthService) { }

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
    this.auth.login(username.value, pass.value).subscribe(res=>{
     if (res === 'Unable to login'){
       this.err = true
     }else {
       this.err = false
     }
    })
  }
}
