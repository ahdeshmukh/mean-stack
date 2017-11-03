import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { RequestOptions } from '@angular/http'
import { Observable } from 'rxjs';

import { MyError } from './../../classes/myerror.class';
import { UtilityService } from './../utility/utility.service'

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private _utilityService: UtilityService) { }

  login(email, password): Observable<any> {
    let errors = [];
    if(!email) {
      errors.push('Email is not provided');
    }
    if(!password) {
      errors.push('Password is not provided');
    }

    if(errors.length > 0) {
      return this._utilityService.returnErrorObservable(errors);
    }

    let url = 'http://localhost:4000/login';
    let data = {"email": email, "password": password};
    let headers =  new HttpHeaders({ 'Content-Type': 'application/json' });
    
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    
    let options = { "headers": headers };
    
    // https://github.com/angular/angular/issues/7445
    // https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b

    return this.http.post(url, data, options);
    
  }

}