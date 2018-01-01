import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private userService: UserService) { }

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
    return this.userService.isLoggedIn().map((isLoggedIn) => {
      if(!isLoggedIn) {
        this.router.navigate(['/']);
      }
      return isLoggedIn;
    });
  }

}