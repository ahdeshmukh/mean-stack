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

  newTaskStatusValues = this.adTodosService.getNewTaskStatusValue();
  inProgressTaskStatusValues = this.adTodosService.getInProgressTaskStatusValue();
  completeTaskStatusValues = this.adTodosService.getCompleteTaskStatusValue();

  constructor(private userService: UserService, private adTodosService: AdTodosService) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((user) => {
      let user_id = user.getUserId();

      this.userService.getUserTaskCountByStatus(user_id).subscribe((tasks) => {//console.log(tasks);
        if(tasks.length) {
          let newTasksCount = 0;
          let inProgressTasksCount = 0;
          let completedTasksCount  = 0;

          // have to use let and create new variables because using this. is giving error in switch statement
          let newTaskStatusValues = this.newTaskStatusValues;
          let inProgressTaskStatusValues = this.inProgressTaskStatusValues;
          let completeTaskStatusValues = this.completeTaskStatusValues;
          _.forEach(tasks, function(value) {
            switch(value.task_name) {
              case newTaskStatusValues:
                newTasksCount = (value.num_tasks) ? value.num_tasks : 0;
                break;
              case inProgressTaskStatusValues:
                inProgressTasksCount = (value.num_tasks) ? value.num_tasks : 0;
                break;
              case completeTaskStatusValues:
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
      if(this.newTasksCount) {
        this.newTasksCount--;
      }
    });

    this.adTodosService.taskCountForCompletedJobsObs.subscribe((currentStatus) => {
      if(currentStatus) {
        // have to use let and create new variables because using this. is giving error in switch statement
        let newTaskStatusValues = this.newTaskStatusValues;
        let inProgressTaskStatusValues = this.inProgressTaskStatusValues;
        //let completeTaskStatusValues = this.completeTaskStatusValues;
        switch(currentStatus) {
          case newTaskStatusValues:
            if(this.newTasksCount) {
              this.newTasksCount--;
            }
            break;
          case inProgressTaskStatusValues:
            if(this.inProgressTasksCount) {
              this.inProgressTasksCount--;
            }
            break;
          default:
            break;
        }
      }
      this.completedTasksCount++;
    });

  }

  /* revisit this later, most likely this is not needed any more */
  getTasksbyStatus(status) {
    return true;
    //this.adTodosService.getTodosListByStatus(status);
  }

}