import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  groups: any;
  clients: any;
  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this._globalService.httpGetProfile();

    this._globalService.onHttpGetProfile.subscribe(
      (profile: any) => {
        this.groups = profile.tag.groups;
        this.clients = profile.tag.accounts;
      }
    );

  }
}
