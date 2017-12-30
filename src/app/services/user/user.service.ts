import { Injectable } from '@angular/core';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { Observable } from 'rxjs/Observable';
import { User } from './../../classes/user.class';

@Injectable()
export class UserService {

  private currentUser;
  constructor(protected localStorage: AsyncLocalStorage) { }

  isLoggedIn():Observable<boolean> {
    return this.localStorage.getItem('currentUser')
    .map((currentUser: any) => {
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

}
