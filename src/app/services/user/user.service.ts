import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Observable } from 'rxjs/Observable';

import { User } from './../../classes/user.class';
import { UtilityService } from './../utility/utility.service';
import { AdHttpService } from '../ad-http/ad.http.service';

@Injectable()
export class UserService {

  private currentUser;
  constructor(protected localStorage: AsyncLocalStorage, private utilityService: UtilityService, private adHttpService: AdHttpService) { }

  getCurrentUser():Observable<User> {
    return this.localStorage.getItem('currentUser').map((currentUser: any) => {
      if(currentUser && currentUser.id && currentUser.email) {
        let user = new User(currentUser.id, currentUser.email, currentUser.firstName, currentUser.lastName);
        return user;
      }
      return null;
    });
  }
  
  isLoggedIn():Observable<boolean> {
    return this.getCurrentUser().map((currentUser: any) => {
      let isLoggedIn = false;
      if(currentUser) {
        let user = new User(currentUser.id, currentUser.email, currentUser.firstName, currentUser.lastName);
        if(user && user.getUserId()) {
          isLoggedIn = true;
        }
      }
      return isLoggedIn;
    });
  }

  getUserTaskCountByStatus(uid): Observable<any> {
    let user_id = uid;
    if(!user_id) {
      return this.getCurrentUser().map((currentUser: any) => {
        if(currentUser) {
          user_id = currentUser.getUserId();
          if(!user_id) {
            return this.utilityService.returnErrorObservable('User Id is not provided');
          } else {
            return this.adHttpService.get('get-users-tasks-count-by-status/'+user_id).map((result) => {
              let tasksData = []
              if(result && result.success && result.data) {
                tasksData = result.data;
              }
              return tasksData;
            });
          }
        }
      });
    } else {
      return this.adHttpService.get('get-users-tasks-count-by-status/'+user_id).map((result) => {
        let tasksData = []
        if(result && result.success && result.data) {
          tasksData = result.data;
        }
        return tasksData;
      });
    }
  }

}