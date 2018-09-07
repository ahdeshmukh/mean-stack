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
      'newTask' : [null, Validators.required]
    });
  }
  
  addNewTask(addNewTaskForm) {
    console.log(addNewTaskForm);
  }

  hideNewTaskForm() {
    this.adTodosService.showAddNewTaskForm(false);
    return false;
  }

}