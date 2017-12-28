import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module'
import { AdTodosModule } from './modules/ad-todos/ad.todos.module';
import { AdHomeModule } from './modules/ad-home/ad.home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AsyncLocalStorageModule,
    ToastrModule.forRoot(),
    AdTodosModule,
    AppRoutingModule,
    AdHomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
