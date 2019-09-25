import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  myMethod() {
    return console.log('hey, what is up!');
  }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries');
  }

  getUserDetails() {
    return this.http.get('http://localhost:17501/api/user');
  }

  loginUser(user_email) {    

    let $getUrl = 'http://localhost:17501/api/user/Login?user_email=' + user_email;

    return this.http.get($getUrl);
  } 

}
