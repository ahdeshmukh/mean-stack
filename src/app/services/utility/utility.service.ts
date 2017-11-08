import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MyError } from './../../classes/myerror.class';

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

  getCurrentEnvironmentName():string {
    //let current_env = this.getCurrentEnvironment();
    return this.current_env.name || 'NA';
  }

  getImagesBasePath():string {
    return this.current_env.images_base_path || '';
  }

  getRestApi():string {
    return this.current_env.restApi || '';
  }

  returnErrorObservable(error): Observable<any> {
    return Observable.create(observer => {
      observer.error(new MyError(error));
    });
  }

}
