import { Component } from '@angular/core';
import * as _ from 'lodash';

import { UserService } from '../../../services/user/user.service';
import { AdTodosService } from '../ad-todos.service'


@Component({
  selector: 'app-todos-num-tasks-by-status',
  templateUrl: './ad-todos-num-tasks-by-status.component.html',
  styleUrls: ['./ad-todos-num-tasks-by-status.component.css'],
  providers: []
})

export class AdTodosNumTasksByStatusComponent {
  newTasksCount = 0;
  inProgressTasksCount = 0;
  completedTasksCount = 0;


  constructor(private userService: UserService, private adTodosService: AdTodosService) {}

    
  ngOnInit() {
    this.userService.getCurrentUser().subscribe((user) => {
      let user_id = user.getUserId();

      this.userService.getUserTaskCountByStatus(user_id).subscribe((tasks) => {//console.log(tasks);
        if(tasks.length) {
          let newTasksCount = 0;
          let inProgressTasksCount = 0;
          let completedTasksCount  = 0;

          _.forEach(tasks, function(value) {
            switch(value.task_name) {
              case 'new':
                newTasksCount = (value.num_tasks) ? value.num_tasks : 0;
                break;
              case 'in_progress':
                inProgressTasksCount = (value.num_tasks) ? value.num_tasks : 0;
                break;
              case 'complete':
                completedTasksCount = (value.num_tasks) ? value.num_tasks : 0;
                break;
              default:
                break;
            }
          });
          this.newTasksCount = newTasksCount;
          this.inProgressTasksCount = inProgressTasksCount;
          this.completedTasksCount = completedTasksCount;
        }
      }, (err) => {
        console.log(err);
      });
    });

    this.adTodosService.taskCountForNewJobsObs.subscribe(() => {
      this.newTasksCount++;
    });

    this.adTodosService.taskCountForInProgressJobsObs.subscribe(() => {
      this.inProgressTasksCount++;
    });

    this.adTodosService.taskCountForCompletedJobsObs.subscribe(() => {
      this.completedTasksCount++;
    });

  }

  /* revisit this later, most likely this is not needed any more */
  getTasksbyStatus(status) {
    return true;
    //this.adTodosService.getTodosListByStatus(status);
  }


}