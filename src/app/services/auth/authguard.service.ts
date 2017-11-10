import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthguardService implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
    let isUserLoggedIn:boolean = this.userService.isLoggedIn();
    if(!isUserLoggedIn) {
        this.router.navigate(['/']);
    }
    return isUserLoggedIn;
  }

}