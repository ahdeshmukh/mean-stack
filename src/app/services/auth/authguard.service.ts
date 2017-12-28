import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user/user.service';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private router: Router, private userService: UserService, protected storage: AsyncLocalStorage) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
    let isUserLoggedIn:boolean = this.userService.isLoggedIn();
    if(!isUserLoggedIn) {
        this.router.navigate(['/']);
    }
    return isUserLoggedIn;
  }

}