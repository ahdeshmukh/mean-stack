//https://www.youtube.com/watch?v=I317BhehZKM
// above video, there was still some issue.
// https://stackoverflow.com/questions/39083756/angular2-observable-behaviorsubject-service-not-working - Konrad Garus suggestion worked

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AdTodosService {

    private todosListStatus = new BehaviorSubject<string>('new');
    currentTodosListStatus = this.todosListStatus.asObservable();

    private taskCountForNewJobs = new BehaviorSubject(0);
    taskCountForNewJobsObs = this.taskCountForNewJobs.asObservable();

    private taskCountForInProgressJobs = new BehaviorSubject(0);
    taskCountForInProgressJobsObs = this.taskCountForInProgressJobs.asObservable();

    private taskCountForCompletedJobs = new BehaviorSubject(0);
    taskCountForCompletedJobsObs = this.taskCountForCompletedJobs.asObservable();
    
    constructor() {}

    getTodosListByStatus(status: string) {
      this.todosListStatus.next(status);
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

}