import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Profile } from './profile-model';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {

  profileForm: any ;

  constructor() { }


  profile: Profile = {
    email: '',
    first_name: '',
    last_name: '',
    alias: '',
    password: '',
    mobile_number: '',
    job_title: ''
  }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email ]),
      first_name: new FormControl('',[Validators.required]),
      last_name: new FormControl('',[Validators.required]),
      alias: new FormControl('',[Validators.required]),
      job_title: new FormControl('',[Validators.required]),
      mobile_number: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      confirm_password: new FormControl('',[Validators.required]),
    });
  }

  onSubmit(): void {
    if(this.profileForm.valid){
      console.log('can submit');
    }
    console.log('form is valid: ',this.profileForm.valid);
    console.log('form values: ',this.profileForm.value);
  }

}
