import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isLogged: any;
  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this._globalService.isLogged.subscribe(
      (response: any) => {
        this.isLogged = response;
      }
    );

    this._globalService.checkLogStatus();
  }

}
