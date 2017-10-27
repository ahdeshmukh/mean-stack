import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AdTodosComponent }    from './ad.todos.component';
 
const todosRoutes: Routes = [
  { path: 'todos',  component: AdTodosComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(todosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdTodosRoutingModule { }