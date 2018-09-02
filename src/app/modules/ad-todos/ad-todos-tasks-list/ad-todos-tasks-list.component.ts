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
        //this.tasksList = tasks;
        tasks.map((task) => {
          task.isInProgressBtnDisabled = this.isInProgressBtnDisabled(task);
          task.isCompleteBtnDisabled = this.isCompleteBtnDisabled(task);
          this.tasksList.push(task);
        })
      }, (err) => {
        //console.log(err);
        this.adToastrService.error('Error in getting tasks');
      });
    });
  }

  addNewTask() {
    this.adTodosService.incrementTaskCountForNewJobs();
  }
  
  changeTaskStatusToInProgress(task) {
    //this.adTodosService.incrementTaskCountForInProgressJobs();
    /*task.status = this.adTodosService.getInProgressTaskStatusValues().value;
    this.userService.getCurrentUser().subscribe((user) => {
      let userId = user.getUserId();
      this.adTodosService.updateUserTaskStatus(userId, task).subscribe((result) => {
        if(result && result.success) {
          this.adTodosService.incrementTaskCountForInProgressJobs();
          this.adToastrService.success('Successfully changed the status of '+ task.name +' to "In Progress"');
          let taskIndex = _.findIndex(this.tasksList, {"name":result.data.task.name, "created_time": result.data.task.created_time});
          task.isInProgressBtnDisabled = true; // task has been successfully converted to In Progress
          this.tasksList[taskIndex] = task
        }
      }, (err) => {
          this.adToastrService.error('Not able to change status of '+ task.name +' to "In Progress"');
      });
    });*/
    this.changeTaskStatus(task, this.adTodosService.getInProgressTaskStatusValues());
  }

  changeTaskStatusToComplete(task) {
    /*task.status = this.adTodosService.getCompleteTaskStatusValues().value;
    this.userService.getCurrentUser().subscribe((user) => {
      let userId = user.getUserId();
      this.adTodosService.updateUserTaskStatus(userId, task).subscribe((result) => {
        if(result && result.success) {
          this.adTodosService.incrementTaskCountForCompletedJobs();
          this.adToastrService.success('Successfully changed the status of '+ task.name +' to "Complete"');
          let taskIndex = _.findIndex(this.tasksList, {"name":result.data.task.name, "created_time": result.data.task.created_time});
          task.isCompleteBtnDisabled = true; // task has been successfully converted to Completed
          task.isInProgressBtnDisabled = true; // since task is completed, disabling the In Progress button
          this.tasksList[taskIndex] = task
        }
      }, (err) => {
          this.adToastrService.error('Not able to change status of '+ task.name +' to "Complete"');
      });
    });*/
    this.changeTaskStatus(task, this.adTodosService.getCompleteTaskStatusValues());
  }

  changeTaskStatus = (task, newStatus) => {
    let currentStatus = task.status;
    let newTask = task;
    newTask.status = newStatus;
    this.userService.getCurrentUser().subscribe((user) => {
      let userId = user.getUserId();
      this.adTodosService.updateUserTaskStatus(userId, newTask).subscribe((result) => {
        if(result && result.success) {
          
          switch(newStatus) {
            case this.adTodosService.getInProgressTaskStatusValues():
              this.adTodosService.incrementTaskCountForInProgressJobs();
              newTask.isInProgressBtnDisabled = true;
              // todo: decrease count for new jobs
              break;
            case this.adTodosService.getCompleteTaskStatusValues():
              this.adTodosService.incrementTaskCountForCompletedJobs();
              newTask.isCompleteBtnDisabled = true; // task has been successfully converted to Completed
              newTask.isInProgressBtnDisabled = true; // since task is completed, disabling the In Progress button
              //todo: if currentStatus == 'new', decrease count of new, else if currentStatus is 'in_progress' decrease count of in_progress
              break;
            default:
              break;
          }

          let taskIndex = _.findIndex(this.tasksList, {"name":result.data.task.name, "created_time": result.data.task.created_time});
          this.tasksList[taskIndex] = newTask;
          this.adToastrService.success('Successfully changed the status of '+ task.name);
          
          //this.adTodosService.incrementTaskCountForCompletedJobs();
          //this.adToastrService.success('Successfully changed the status of '+ task.name +' to "Complete"');
          //let taskIndex = _.findIndex(this.tasksList, {"name":result.data.task.name, "created_time": result.data.task.created_time});
          //task.isCompleteBtnDisabled = true; // task has been successfully converted to Completed
          //task.isInProgressBtnDisabled = true; // since task is completed, disabling the In Progress button
          //this.tasksList[taskIndex] = task
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