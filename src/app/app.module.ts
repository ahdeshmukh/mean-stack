import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AdHeaderModule } from './modules/ad-header/ad.header.module'
import { AdLoginModule } from './modules/ad-login/ad.login.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdHeaderModule,
    AdLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
