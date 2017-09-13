import { Component } from '@angular/core';

import { UtilityService } from './services/utility/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UtilityService]
})

export class AppComponent {
  title = 'MEAN Stack App';
  current_environment = '';
  constructor(private _utilityService: UtilityService) {}
  ngOnInit() {
        this.current_environment = this._utilityService.getCurrentEnvironmentName();
    }
}
