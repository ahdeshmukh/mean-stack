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

    let credentials = {"email": email, "password": password};
    let url = 'http://localhost:4000/login';
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(url, credentials, options);
    
  }

}