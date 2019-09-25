import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  title: string = 'User Details';
  result: any = {};


  constructor(private _http: HttpService) { }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this._http.getUserDetails().subscribe(data => {
      this.result = data;
      console.log(this.result);
    });
  }

}
