import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { AdTodosTasksListComponent } from '../ad-todos-tasks-list/ad-todos-tasks-list.component';

@NgModule({
  imports: [CommonModule, NgxPaginationModule],
  declarations: [AdTodosTasksListComponent],
  exports: [AdTodosTasksListComponent]
})

export class AdTodosTasksListModule { }
