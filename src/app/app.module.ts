import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module'
import { AdTodosModule } from './modules/ad-todos/ad.todos.module';
import { AdHomeModule } from './modules/ad-home/ad.home.module';

//https://medium.com/@MatheusCAS/injecting-a-service-into-another-service-in-angular-3b253df5c21
import { UtilityService } from './services/utility/utility.service';
import { AdHttpService } from './services/ad-http/ad.http.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AsyncLocalStorageModule,
    ToastrModule.forRoot({
		maxOpened: 1,
		autoDismiss: true
	}),
    AdTodosModule,
    AppRoutingModule,
    AdHomeModule
  ],
  providers: [
    UtilityService,
    AdHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
