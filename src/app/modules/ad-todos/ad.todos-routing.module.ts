import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AdTodosComponent } from './ad.todos.component';
import { AuthguardService } from '../../services/auth/authguard.service';
import { UserService } from '../../services/user/user.service';
 
const todosRoutes: Routes = [
  { path: 'todos',  component: AdTodosComponent, canActivate:[AuthguardService] }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(todosRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthguardService,
    UserService
  ]
})
export class AdTodosRoutingModule { }