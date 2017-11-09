import { Injectable } from '@angular/core';

import { User } from './../../classes/user.class';

@Injectable()
export class UserService {

  private currentUser;
  constructor() {
    let currentUser = localStorage.getItem('currentUser');
    try {
      this.currentUser = JSON.parse(currentUser);
    } catch(e) {
      this.currentUser = currentUser;
    }
  }

  isLoggedIn():boolean {//return true;
    let user = (this.currentUser && this.currentUser.user) ? this.currentUser.user : null;
    return (user && user.id) ? true : false;
  }

}
