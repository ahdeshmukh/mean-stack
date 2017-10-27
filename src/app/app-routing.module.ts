import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AdTodosModule } from './modules/ad-todos/ad.todos.module'
import { AdTodosComponent } from './modules/ad-todos/ad.todos.component'

const appRoutes: Routes = [
  { path: 'todos', component: AdTodosComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    AdTodosModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }