import { Component,OnInit } from '@angular/core';

import { UserService } from '../../../services/user/user.service';
import { AdTodosService } from '../ad-todos.service'

@Component({
  selector: 'app-todos-tasks-list',
  templateUrl: './ad-todos-tasks-list.component.html',
  styleUrls: ['./ad-todos-tasks-list.component.css'],
  providers: []
})

export class AdTodosTasksListComponent {
	tasksList: any[] = [];
  tasksListStatus: string;
  p: number = 1;

  constructor(private adTodosService: AdTodosService, private userService: UserService) {}

  ngOnInit() {
    /*this.adTodosService.currentTodosListStatus.subscribe((tasksListStatus) => {
      this.tasksListStatus = tasksListStatus;
    });*/

    this.userService.getCurrentUser().subscribe((user) => {
      let user_id = user.getUserId();

      this.userService.getUserTasksByStatus(this.tasksListStatus, user_id).subscribe((tasks) => {
        this.tasksList = tasks;
        console.log(this.tasksList);
      }, (err) => {
        console.log(err);
      });
    });
  }

  addNewTask() {
    this.adTodosService.incrementTaskCountForNewJobs();
  }
  
  changeTaskStatusToInProgress() {
    this.adTodosService.incrementTaskCountForInProgressJobs();
  }

  changeTaskStatusToComplete() {
    this.adTodosService.incrementTaskCountForCompletedJobs();
  }

  confirmStatusChange(status) {
    if(status == 'in_progress') {
      this.adTodosService.incrementTaskCountForInProgressJobs();
    }
  }

  changeStatusClicked(this) {
    console.log(this);
  }

}