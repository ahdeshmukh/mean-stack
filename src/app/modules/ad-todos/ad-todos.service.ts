//https://www.youtube.com/watch?v=I317BhehZKM
// above video, there was still some issue.
// https://stackoverflow.com/questions/39083756/angular2-observable-behaviorsubject-service-not-working - Konrad Garus suggestion worked

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../../services/user/user.service';
import { AdHttpService } from '../../services/ad-http/ad.http.service';
import { UtilityService } from '../../services/utility/utility.service';

@Injectable()
export class AdTodosService {

    /*private todosListStatus = new BehaviorSubject<string>('new');
    currentTodosListStatus = this.todosListStatus.asObservable();*/

    private taskCountForNewJobs = new BehaviorSubject(0);
    taskCountForNewJobsObs = this.taskCountForNewJobs.asObservable();

    private taskCountForInProgressJobs = new BehaviorSubject(0);
    taskCountForInProgressJobsObs = this.taskCountForInProgressJobs.asObservable();

    private taskCountForCompletedJobs = new BehaviorSubject(0);
    taskCountForCompletedJobsObs = this.taskCountForCompletedJobs.asObservable();
    
    constructor(private userService: UserService, 
      private adHttpService: AdHttpService, 
      private utilityService: UtilityService) {}

    getTodosListByStatus(status: string, userId: string):Observable<any> {
     //this.todosListStatus.next(status);
     return this.userService.getUserTasksByStatus(status, userId);
    }

    incrementTaskCountForNewJobs() {
      this.taskCountForNewJobs.next(1);
    }

    incrementTaskCountForInProgressJobs() {
      this.taskCountForInProgressJobs.next(1);
    }

    incrementTaskCountForCompletedJobs() {
      this.taskCountForCompletedJobs.next(1);  
    }

    updateUserTaskStatus(user_id, task):Observable<any> {//console.log('fsdfsdcccc');
      let errors = [];
      if(!user_id) {
        errors.push('User ID is not provided');
      }
      if(!task && !task.status) {
        errors.push('Task or task status is not provided');
      }

      if(errors.length > 0) {
        return this.utilityService.returnErrorObservable(errors);
      }
      
      let params = {"user_id": user_id, "task": task};
      return this.adHttpService.put('user-update-task', params).map((result) => {
        return result;
      });
    }

    getInProgressTaskStatusValues() {
      return this.utilityService.getStatusesVal().INPROGRESS;
    }
    getCompleteTaskStatusValues() {
      return this.utilityService.getStatusesVal().COMPLETE;
    }
    getNewTaskStatusValues() {
      return this.utilityService.getStatusesVal().NEW;
    }

    isInProgressBtnDisabled(task) {
      //console.log('fsdfdlk');
      let disabled = false;
      if(task.status && (task.status !== this.getNewTaskStatusValues())) {
        disabled = true;
      }
      return disabled;
    }

    isCompleteBtnDisabled(task) {
      let disabled = false;
      if(task.status && (task.status === this.getCompleteTaskStatusValues())) {
        disabled = true;
      }
      return disabled;
    }

}