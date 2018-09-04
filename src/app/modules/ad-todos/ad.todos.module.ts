import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdTodosRoutingModule } from './ad.todos-routing.module';
import { AdHeaderModule } from '../ad-header/ad.header.module';
import { AdTodosComponent } from './ad.todos.component';
import { AdTodosNumTasksByStatusModule } from './ad-todos-num-tasks-by-status/ad-todos-num-tasks-by-status.module';
import { AdTodosTasksListModule } from './ad-todos-tasks-list/ad-todos-tasks-list.module';
import { AdTodosNewTaskModule } from './ad-todos-new-task/ad-todos-new-task.module';

@NgModule({
  imports: [
    CommonModule,
    AdTodosRoutingModule,
    AdHeaderModule,
    AdTodosNumTasksByStatusModule,
    AdTodosTasksListModule,
    AdTodosNewTaskModule
  ],
  declarations: [AdTodosComponent],
  exports: []
})

export class AdTodosModule { }
