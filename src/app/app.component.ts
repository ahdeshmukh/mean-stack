import { Component } from '@angular/core';

import { UtilityService } from './services/utility/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UtilityService]
})

export class AppComponent {
  title: string = 'MEAN Stack App';
  images_base_path: string = '';
  current_environment: string = '';
  showLoginForm: boolean = true;
  showRegistrationForm: boolean = false;

  onShowingRegistrationForm(showRegistrationForm: boolean) {
    this.showRegistrationForm = showRegistrationForm; // can actually set it to true 
    this.showLoginForm = false;
  }

  onShowingLoginForm(showLoginForm: boolean) {
    this.showLoginForm = showLoginForm; // can actually set it to true 
    this.showRegistrationForm = false;
  }
  
  constructor(private _utilityService: UtilityService) {}
  
  ngOnInit() {
    this.current_environment = this._utilityService.getCurrentEnvironmentName();
    this.images_base_path = this._utilityService.getImagesBasePath();
  }
}
