import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import * as $ from 'jquery';


import { debug } from 'util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{ 

  title = 'Welcome!';
  loginResponse: any;

  Users: any = {};

  constructor(private router: Router,
    private _http: HttpService) { }

  ngOnInit() {
    this.Users = { user_email: 'rd@test.com' };
  }

  loginUser(user_email, user_password) {

    console.log(user_email);

    this._http.loginUser(user_email).subscribe(data => {
      this.loginResponse = data;
      console.log(this.loginResponse);

      if (this.loginResponse.isSuccess == 1)
        this.router.navigate(['user']);
      else {
        //show popup        
        $('#loginAlert').show();
      }
    });
  }

  modelClose() {
    $('#loginAlert').toggle();
  }


  


}
