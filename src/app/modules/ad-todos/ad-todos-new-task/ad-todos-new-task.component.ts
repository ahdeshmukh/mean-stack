import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AdTodosService } from './../ad-todos.service'

@Component({
  selector: 'app-todos-new-task',
  templateUrl: './ad-todos-new-task.component.html',
  providers: []
  //styleUrls: ['./ad-todos-new-task.component.css']
})

export class AdTodosNewTaskComponent {

  addingNewTask:boolean = false;
  rForm: FormGroup;

  constructor(private fb: FormBuilder,private adTodosService: AdTodosService) {
    this.rForm = this.fb.group({
      'task' : [null, Validators.required]
    });
  }
  
  addNewTask(addNewTaskForm) {
    let task = {name: addNewTaskForm.task, status: 'new', created_time: Date.now()};
    this.adTodosService.newTaskAdded(task); // todo: make an AJAX call to add task, add data to Mongo, 
    // then invoke this.adTodosService.newTaskAdded(task); and hide the form
  }

  hideNewTaskForm() {
    this.adTodosService.showAddNewTaskForm(false);
    return false;
  }

}