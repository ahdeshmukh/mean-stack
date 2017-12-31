import { Component, } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { AdToastrService } from '../../services/ad-toastr/ad.toastr.service';

// need to check if this is really needed. for now code breaks if these are not included
import { AdHttpService } from '../../services/ad-http/ad.http.service';
import { UtilityService } from '../../services/utility/utility.service';

// selector is enclosed in [], so this component can be used as an attribute. eg: <li app-logout></li>. check in ad.header.component.html
// if we just use it like <app-logout>, angular insert <app-logout> in html which breaks the css styles, since parent child relation is lost
// eg: .navbar>ul>li>a styles cannot be applied since we get .navbar>ul>li>app-logout>a in html
// https://stackoverflow.com/questions/41251984/angular2-selector-tag-breaks-css-parent-child-relationship
@Component({
  selector: '[app-logout]',
  templateUrl: './ad.logout.component.html',
  styleUrls: ['./ad.logout.component.css'],
  providers: [
    AdToastrService,
    AuthService,
    AdHttpService,
    UtilityService
  ]
})

export class AdLogoutComponent {
  constructor(private adToastr: AdToastrService, 
  private authService: AuthService, 
  private adHttp: AdHttpService, 
  private utilityService: UtilityService,
  private router: Router) { }

  logout(event) {
    event.preventDefault();
    this.authService.logout().subscribe((logout) => {
      if(logout) {
        this.adToastr.success('Logged out successfully.');
        this.router.navigateByUrl('/');
      } else {
        this.adToastr.error('Error in logging out. Please try again.');
      }
    })
  }
  
}