import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http'
import { Observable } from 'rxjs';

import { MyError } from './../../classes/myerror.class';
import { UtilityService } from './../utility/utility.service';
import { AdHttpService } from '../ad-http/ad.http.service';

import { User } from './../../classes/user.class';

@Injectable()
export class AuthService {

  constructor(private adHttp: AdHttpService, private utilityService: UtilityService) { }

  login(email, password): Observable<any> {
    let errors = [];
    if(!email) {
      errors.push('Email is not provided');
    }
    if(!password) {
      errors.push('Password is not provided');
    }

    if(errors.length > 0) {
      return this.utilityService.returnErrorObservable(errors);
    }
    
    let credentials = {"email": email, "password": password};
    
    return this.adHttp.post('login', credentials)
    .do((result) => {
      let user = new User(result.data);
      localStorage.setItem('currentUser', JSON.stringify({user}));
    });
    
  }

}