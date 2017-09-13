import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable()
export class UtilityService {

  environment: any;
  current_env: any;
  constructor() { 
    this.current_env = environment;
  }

  /*getCurrentEnvironment() {
    return environment;
  }*/

  getCurrentEnvironmentName() {
    //let current_env = this.getCurrentEnvironment();
    return this.current_env.name || 'NA';
  }

  getImagesBasePath() {
    return this.current_env.images_base_path || '';
  }

}
