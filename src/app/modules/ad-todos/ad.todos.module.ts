import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdTodosComponent } from './ad.todos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdTodosComponent],
  exports: [AdTodosComponent]
})

export class AdTodosModule { }
