import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MyError } from './../../classes/myerror.class';
import { TaskStatuses } from '../../app.task-statuses';


@Injectable()
export class UtilityService {

  environment: any;
  currentEnv: any;
  
  constructor() { 
    this.currentEnv = environment;
  }

  /*getCurrentEnvironment() {
    return environment;
  }*/

  getCurrentEnvironmentName():string {
    //let currentEnv = this.getCurrentEnvironment();
    return this.currentEnv.name || 'NA';
  }

  getImagesBasePath():string {
    return this.currentEnv.images_base_path || '';
  }

  getRestApi():string {
    return this.currentEnv.restApi || '';
  }

  returnErrorObservable(error): Observable<any> {
    return Observable.create(observer => {
      observer.error(new MyError(error));
    });
  }

  returnCompleteObservable(value): Observable<any> {
    return Observable.create(observer => {
      observer.complete(value);
    });
  }

  getStatusesVal(): TaskStatuses {
    return this.currentEnv.taskStatuses;
  }

}
