import { Component,OnInit } from '@angular/core';

import { AdTodosService } from '../ad-todos.service'

@Component({
  selector: 'app-todos-tasks-list',
  templateUrl: './ad-todos-tasks-list.component.html',
  styleUrls: ['./ad-todos-tasks-list.component.css'],
  providers: []
})

export class AdTodosTasksListComponent {
	tasksList = 'My Task List Status';
  tasksListStatus: string;

  constructor(private adTodosService: AdTodosService) {}

  ngOnInit() {
    this.adTodosService.currentTodosListStatus.subscribe((tasksListStatus) => {
      this.tasksListStatus = tasksListStatus;
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

}