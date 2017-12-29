import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http'
import { Observable } from 'rxjs';
import { AsyncLocalStorage } from 'angular-async-local-storage';

import { MyError } from './../../classes/myerror.class';
import { UtilityService } from './../utility/utility.service';
import { AdHttpService } from '../ad-http/ad.http.service';

import { User } from './../../classes/user.class';

@Injectable()
export class AuthService {

  constructor(private adHttp: AdHttpService, private utilityService: UtilityService, protected localStorage: AsyncLocalStorage) { }

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
    .map((result) => {
      if(result && result.success && result.data) {
        let user = new User(result.data._id, result.data.email, result.data.first_name, result.data.last_name);
        this.localStorage.setItem('currentUser', user).subscribe(() => {
          console.log('Local storage set');
          this.localStorage.getItem('currentUser')
          .subscribe((currentUser) => {
            console.log(currentUser);
          });
        })
      }
      return result;
    });
    
  }

}