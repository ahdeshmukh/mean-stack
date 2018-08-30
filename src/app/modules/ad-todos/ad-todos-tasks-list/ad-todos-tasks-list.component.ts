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
  //isInProgressBtnDisabled: boolean = false;

  constructor(private adTodosService: AdTodosService, 
    private userService: UserService, 
    private adToastrService: AdToastrService) {}

  ngOnInit() {
    /*this.adTodosService.currentTodosListStatus.subscribe((tasksListStatus) => {
      this.tasksListStatus = tasksListStatus;
    });*/

    this.userService.getCurrentUser().subscribe((user) => {
      let user_id = user.getUserId();

      this.userService.getUserTasksByStatus(this.tasksListStatus, user_id).subscribe((tasks) => {
        this.tasksList = tasks;
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
    task.status = this.adTodosService.getInProgressTaskStatusVal();
    this.userService.getCurrentUser().subscribe((user) => {
      let user_id = user.getUserId();
      this.adTodosService.updateUserTaskStatus(user_id, task).subscribe((result) => {
        if(result && result.success) {
          this.adTodosService.incrementTaskCountForInProgressJobs();
          this.adToastrService.success('Successfully changed the status of '+ task.name +' to "In Progress"');
          let task_index = _.findIndex(this.tasksList, {"name":result.data.task.name, "created_time": result.data.task.created_time});
          this.tasksList[task_index] = task
        }
      }, (err) => {
          this.adToastrService.error('Not able to change status of '+ task.name +' to "In Progress"');
      });
    });
    
    //
  }

  changeTaskStatusToComplete() {
    this.adTodosService.incrementTaskCountForCompletedJobs();
  }

  confirmStatusChange(status) {
    if(status === 'in_progress') {
      this.adTodosService.incrementTaskCountForInProgressJobs();
    }
  }

  changeStatusClicked(this) {
    console.log(this);
  }

  isInProgressBtnDisabled(task) {//console.log('fsdfsfs');
    /*let disabled = false;
    if(task.status && (task.status === 'in_progress')) {
      disabled = true;
    }
    return disabled;*/
    return this.adTodosService.isInProgressBtnDisabled(task);

  }

  isCompleteBtnDisabled(task) {
    return this.adTodosService.isCompleteBtnDisabled(task);
  }

}