import { Component } from '@angular/core';

import { UtilityService } from '../../services/utility/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './ad.login.component.html',
  styleUrls: ['./ad.login.component.css'],
  providers: [UtilityService]
})

export class AdLoginComponent {
  images_base_path = '';
  constructor(private _utilityService: UtilityService) {}
  ngOnInit() {
    this.images_base_path = this._utilityService.getImagesBasePath();
  }
}