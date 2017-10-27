import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module'
import { AdLoginModule } from './modules/ad-login/ad.login.module'
import { AdRegistrationModule } from './modules/ad-registration/ad.registration.module'
import { AdTodosModule } from './modules/ad-todos/ad.todos.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AdLoginModule,
    AdRegistrationModule,
    AdTodosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
