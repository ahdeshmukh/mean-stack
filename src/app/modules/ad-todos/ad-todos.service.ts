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

    private taskCountForNewJobs = new BehaviorSubject(null);
    taskCountForNewJobsObs = this.taskCountForNewJobs.asObservable();

    private taskCountForInProgressJobs = new BehaviorSubject(null);
    taskCountForInProgressJobsObs = this.taskCountForInProgressJobs.asObservable();

    private taskCountForCompletedJobs = new BehaviorSubject(null);
    taskCountForCompletedJobsObs = this.taskCountForCompletedJobs.asObservable();

    private addNewTaskForm = new BehaviorSubject(null);
    addNewTaskFormObs = this.addNewTaskForm.asObservable();

    
    constructor(private userService: UserService, 
      private adHttpService: AdHttpService, 
      private utilityService: UtilityService) {}

    getTodosListByStatus(status: string, userId: string):Observable<any> {
     return this.userService.getUserTasksByStatus(status, userId);
    }

    incrementTaskCountForNewJobs() {
      console.log('Service Increment');
      this.taskCountForNewJobs.next(1);
    }

    incrementTaskCountForInProgressJobs() {
      this.taskCountForInProgressJobs.next(1);
    }

    incrementTaskCountForCompletedJobs(currentStatus) {
      this.taskCountForCompletedJobs.next(currentStatus);  
    }

    showAddNewTaskForm(showAddNewTaskForm:boolean) {
      this.addNewTaskForm.next(showAddNewTaskForm);
    }

    updateUserTaskStatus(user_id, task):Observable<any> {//console.log('fsdfsdcccc');
      let errors = [];
      if(!user_id) {
        errors.push('User ID is not provided');
      }
      if(!task) {
        errors.push('Task is not provided');
      } else {
        if(!task.status) {
          errors.push('New Task status is not provided');
        }
        if(!task.currentStatus) {
          errors.push('Current Task status is not provided');
        }
      }

      if(errors.length > 0) {
        return this.utilityService.returnErrorObservable(errors);
      }
      
      let params = {"user_id": user_id, "task": task};
      return this.adHttpService.put('user-update-task', params).map((result) => {
        return result;
      });
    }

    getInProgressTaskStatusValue() {
      return this.utilityService.getStatusesData().INPROGRESS.value;
    }
    getCompleteTaskStatusValue() {
      return this.utilityService.getStatusesData().COMPLETE.value;
    }
    getNewTaskStatusValue() {
      return this.utilityService.getStatusesData().NEW.value;
    }

    isInProgressBtnDisabled(task) {
      let disabled = false;
      if(task.status && (task.status !== this.getNewTaskStatusValue())) {
        disabled = true;
      }
      return disabled;
    }

    isCompleteBtnDisabled(task) {
      let disabled = false;
      if(task.status && (task.status === this.getCompleteTaskStatusValue())) {
        disabled = true;
      }
      return disabled;
    }

}