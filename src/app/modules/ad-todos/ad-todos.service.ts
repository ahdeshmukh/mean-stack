//https://www.youtube.com/watch?v=I317BhehZKM
// above video, there was still some issue.
// https://stackoverflow.com/questions/39083756/angular2-observable-behaviorsubject-service-not-working - Konrad Garus suggestion worked

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AdTodosService {

    private todosListStatus = new BehaviorSubject<string>('new');
    currentTodosListStatus = this.todosListStatus.asObservable();
    
    constructor() {}

    getTodosListByStatus(status: string) {
        this.todosListStatus.next(status);
    }

}