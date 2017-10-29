import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MyError } from './../../classes/myerror.class';
import { UtilityService } from './../utility/utility.service'

@Injectable()
export class AuthService {

  constructor(private http: HttpClient, private _utilityService: UtilityService) { }

  login(email, password): Observable<any> {
    let errors = [];
    if(email) {
      errors.push('Email is not provided');
    }
    if(password) {
      errors.push('Password is not provided');
    }

    if(errors.length > 0) {
      return this._utilityService.returnErrorObservable(errors);
    }
    
  }

}