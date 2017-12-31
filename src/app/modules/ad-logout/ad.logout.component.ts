import { Component, } from '@angular/core';
import { Router } from '@angular/router';

// selector is enclosed in [], so this component can be used as an attribute. eg: <li app-logout></li>. check in ad.header.component.html
// if we just use it like <app-logout>, angular insert <app-logout> in html which breaks the css styles, since parent child relation is lost
// eg: .navbar>ul>li>a styles cannot be applied since we get .navbar>ul>li>app-logout>a in html
// https://stackoverflow.com/questions/41251984/angular2-selector-tag-breaks-css-parent-child-relationship
@Component({
  selector: '[app-logout]',
  templateUrl: './ad.logout.component.html',
  styleUrls: ['./ad.logout.component.css'],
  providers: []
})

export class AdLogoutComponent {
  constructor() { }

  logout(event) {
    event.preventDefault();
    console.log('log out');
  }
  
}