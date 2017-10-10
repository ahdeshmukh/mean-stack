import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AdLoginModule } from './modules/ad-login/ad.login.module'
import { AdRegistrationModule } from './modules/ad-registration/ad.registration.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AdLoginModule,
    AdRegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
