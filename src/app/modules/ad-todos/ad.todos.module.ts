import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdTodosRoutingModule } from './ad.todos-routing.module';
import { AdHeaderModule } from '../ad-header/ad.header.module';
import { AdTodosNumTasksByStatusModule } from './ad-todos-num-tasks-by-status/ad-todos-num-tasks-by-status.module';

import { AdTodosComponent } from './ad.todos.component';

@NgModule({
  imports: [
    CommonModule,
    AdTodosRoutingModule,
    AdHeaderModule,
    AdTodosNumTasksByStatusModule
  ],
  declarations: [AdTodosComponent],
  exports: []
})

export class AdTodosModule { }
