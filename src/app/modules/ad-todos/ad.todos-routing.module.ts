import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AdTodosComponent } from './ad.todos.component';
import { AuthGuardService } from '../../services/auth/auth.guard.service';
import { UserService } from '../../services/user/user.service';
 
const todosRoutes: Routes = [
  { path: 'todos',  component: AdTodosComponent, canActivate:[AuthGuardService] }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(todosRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuardService,
    UserService
  ]
})
export class AdTodosRoutingModule { }