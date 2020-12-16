import { GlobalService } from '../../services/global.service';
import { Component, OnInit } from '@angular/core';
import {Login} from './login-model';
import { Router } from '@angular/router';


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

  constructor(private service: GlobalService, private router: Router) {
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

        this.router.navigate(['my-profile', {}]);
      }
    );
  }
}
