import { Component, OnInit } from '@angular/core';
import {Login} from './login-model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  logins: Login = {
    username: '',
    password: ''
  };

  constructor() { }

  ngOnInit(): void {
    console.log('old value', this.logins)
  }

  onLogin():void {
    console.log('new value', this.logins)
  }

}
