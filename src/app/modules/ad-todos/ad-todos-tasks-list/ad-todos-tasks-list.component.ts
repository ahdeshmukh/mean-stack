import { Component,OnInit } from '@angular/core';
import * as _ from 'lodash';

import { UserService } from '../../../services/user/user.service';
import { AdTodosService } from '../ad-todos.service'
import { AdToastrService } from '../../../services/ad-toastr/ad.toastr.service';

@Component({
  selector: 'app-todos-tasks-list',
  templateUrl: './ad-todos-tasks-list.component.html',
  styleUrls: ['./ad-todos-tasks-list.component.css'],
  providers: [AdToastrService]
})

export class AdTodosTasksListComponent {
	tasksList: any[] = [];
  tasksListStatus: string;
  p: number = 1;

  constructor(private adTodosService: AdTodosService, 
    private userService: UserService, 
    private adToastrService: AdToastrService) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((user) => {
      let user_id = user.getUserId();

      this.userService.getUserTasksByStatus(this.tasksListStatus, user_id).subscribe((tasks) => {
        tasks.map((task) => {
          task.isInProgressBtnDisabled = this.isInProgressBtnDisabled(task);
          task.isCompleteBtnDisabled = this.isCompleteBtnDisabled(task);
          this.tasksList.push(task);
        })
      }, (err) => {
        this.adToastrService.error('Error in getting tasks');
      });
    });
  }

  addNewTask() {
    this.adTodosService.incrementTaskCountForNewJobs();
  }
  
  changeTaskStatusToInProgress(task) {
    this.changeTaskStatus(task, this.adTodosService.getInProgressTaskStatusValue());
  }

  changeTaskStatusToComplete(task) {
    this.changeTaskStatus(task, this.adTodosService.getCompleteTaskStatusValue());
  }

  changeTaskStatus = (task, newStatus) => {
    let currentStatus = task.status;
    let newTask = task;
    newTask.status = newStatus;
    newTask.currentStatus = currentStatus; // need this to ensure that we only allow tasks to be updated to certain status from current status
    this.userService.getCurrentUser().subscribe((user) => {
      let userId = user.getUserId();
      this.adTodosService.updateUserTaskStatus(userId, newTask).subscribe((result) => {
        if(result && result.success) {
          switch(newStatus) {
            case this.adTodosService.getInProgressTaskStatusValue():
              this.adTodosService.incrementTaskCountForInProgressJobs();
              newTask.isInProgressBtnDisabled = true;
              break;
            case this.adTodosService.getCompleteTaskStatusValue():
              this.adTodosService.incrementTaskCountForCompletedJobs(currentStatus);
              newTask.isCompleteBtnDisabled = true; // task has been successfully converted to Completed
              newTask.isInProgressBtnDisabled = true; // since task is completed, disabling the In Progress button
              break;
            default:
              break;
          }

          let taskIndex = _.findIndex(this.tasksList, {"name":result.data.task.name, "created_time": result.data.task.created_time});
          this.tasksList[taskIndex] = newTask;
          this.adToastrService.success('Successfully changed the status of '+ task.name);
        } else {
          this.adToastrService.error('Not able to change status of '+ task.name);
        }
      }, (err) => {
          this.adToastrService.error('Not able to change status of '+ task.name);
      });
    });
  }

  isInProgressBtnDisabled(task) {
    return this.adTodosService.isInProgressBtnDisabled(task);

  }

  isCompleteBtnDisabled(task) {
    return this.adTodosService.isCompleteBtnDisabled(task);
  }

}