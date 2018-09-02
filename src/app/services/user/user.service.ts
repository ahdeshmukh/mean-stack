import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Observable } from 'rxjs/Observable';

import { User } from './../../classes/user.class';
import { UtilityService } from './../utility/utility.service';
import { AdHttpService } from '../ad-http/ad.http.service';

@Injectable()
export class UserService {

  private currentUser;
  constructor(protected localStorage: AsyncLocalStorage, 
    private utilityService: UtilityService, 
    private adHttpService: AdHttpService,
  ) { }

  getCurrentUser():Observable<User> {
    return this.localStorage.getItem('currentUser').map((currentUser: any) => {
      if(currentUser && currentUser.id && currentUser.email) {
        let user = new User(currentUser.id, currentUser.email, currentUser.firstName, currentUser.lastName);
        return user;
      }
      return null;
    });
  }

  /*getCurrentUserNew():User {
    let currentUser = this.localStorage.getItem('currentUser');
    let user = null;
    if(currentUser && currentUser.id && currentUser.email) {
      user = new User(currentUser.id, currentUser.email, currentUser.firstName, currentUser.lastName);
    }
    return null;
  }*/
  
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

  getUserTasksByStatus(status: string, uid: string): Observable<any> {
    let user_id = uid;
    let task_status = (status) ? status : '';
    
    if(!user_id) {
      return this.getCurrentUser().map((currentUser: any) => {
        if(currentUser) {
          user_id = currentUser.getUserId();
          if(!user_id) {
            return this.utilityService.returnErrorObservable('User Id is not provided');
          } else {
            return this.adHttpService.get('get-users-tasks-list-by-status/'+user_id+'/'+task_status).map((result) => {
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
      return this.adHttpService.get('get-users-tasks-list-by-status/'+user_id+'/'+task_status).map((result) => {
        let tasksData = []
        if(result && result.success && result.data) {
          tasksData = result.data;
        }
        return tasksData;
      });
    }
  }

  addUser = (user: object):Observable<any> => {
    let errors = [];

    if(!user['firstName']) {
      errors.push('First name is required')
    }
    if(!user['lastName']) {
      errors.push('Last name is required')
    }
    if(!user['email']) {
      errors.push('Email is required');
    }
    if(!user['password']) {
      errors.push('Password is required');
    }
    if(!user['confirmPassword']) {
      errors.push('Confirm Password is required');
    }
    if(user['password'] !== user['confirmPassword']) {
      errors.push('Password and Confirm password do not match');
    }

    if(errors.length > 0) {
      return this.utilityService.returnErrorObservable(errors);
    }

    return this.adHttpService.post('add-user', user).map((result) => {
      return result;
    });

  }

}