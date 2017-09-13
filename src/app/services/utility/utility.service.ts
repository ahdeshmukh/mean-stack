import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class UtilityService {

  environment: any;
  constructor() { }

  getCurrentEnvironment() {
    return environment;
  }

  getCurrentEnvironmentName() {
    let current_env = this.getCurrentEnvironment();
    return current_env.name || 'NA';
  }

}
