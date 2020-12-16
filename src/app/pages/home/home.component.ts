import { GlobalService } from '../../services/global.service';
import { Component, OnInit } from '@angular/core';
import {Login} from './login-model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLogged: boolean;

  logins: Login = {
    username: '',
    password: ''
  };

  constructor(private service: GlobalService) {
    this.isLogged = false;
  }

  ngOnInit(): void {
    this.service.isLogged.subscribe(
      (logged: any) => {
        console.log('isLogged', logged);
        this.isLogged = logged;
      }
    );

    this.service.checkLogStatus();
  }

  onLogin(): void {
    this.service.httpLogin(this.logins);

    this.service.onHttpLogin.subscribe(
      (response: any) => {
        const token = response.token;
        this.service.setToken(token);
        console.log('token from service',this.service.getToken());
      }
    );
  }

  onLogout(): void {
    this.service.deleteToken();
  }
}
