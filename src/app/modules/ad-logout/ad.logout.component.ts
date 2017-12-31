import { Component, } from '@angular/core';
import { Router } from '@angular/router';

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