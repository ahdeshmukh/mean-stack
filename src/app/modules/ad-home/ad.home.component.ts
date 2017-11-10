import { Component, OnInit } from '@angular/core';

import { UtilityService } from '../../services/utility/utility.service';

@Component({
  selector: 'app-home',
  templateUrl: './ad.home.component.html',
  styleUrls: ['./ad.home.component.css'],
  providers: [
    UtilityService
  ]
})
export class AdHomeComponent implements OnInit {

  title: string = 'MEAN Stack App';
  images_base_path: string = '';
  current_environment: string = ''
  showLoginForm: boolean = true;
  showRegistrationForm: boolean = false;

  constructor(private utilityService: UtilityService) { }

  ngOnInit() {
    this.current_environment = this.utilityService.getCurrentEnvironmentName();
    this.images_base_path = this.utilityService.getImagesBasePath();
  }

  onShowingRegistrationForm(showRegistrationForm: boolean) {
    this.showRegistrationForm = showRegistrationForm; // can actually set it to true 
    this.showLoginForm = false;
  }

  onShowingLoginForm(showLoginForm: boolean) {
    this.showLoginForm = showLoginForm; // can actually set it to true 
    this.showRegistrationForm = false;
  }

}
