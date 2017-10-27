import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AdLoginModule } from './modules/ad-login/ad.login.module'
import { AdRegistrationModule } from './modules/ad-registration/ad.registration.module'
import { AdTodosModule } from './modules/ad-todos/ad.todos.module'
import { AdTodosComponent } from './modules/ad-todos/ad.todos.component'

const appRoutes: Routes = [
  { path: 'todos', component: AdTodosComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AdLoginModule,
    AdRegistrationModule,
    AdTodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
