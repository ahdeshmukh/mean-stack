import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdTodosNewTaskComponent } from './ad-todos-new-task.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AdTodosNewTaskComponent],
  exports: [AdTodosNewTaskComponent]
})
export class AdTodosNewTaskModule { }
