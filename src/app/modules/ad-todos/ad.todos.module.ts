import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdTodosRoutingModule } from './ad.todos-routing.module';

import { AdTodosComponent } from './ad.todos.component';

@NgModule({
  imports: [
    CommonModule,
    AdTodosRoutingModule
  ],
  declarations: [AdTodosComponent],
  exports: []
})

export class AdTodosModule { }
