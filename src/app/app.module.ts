import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MyHeaderModule } from './modules/ad-header/ad.header.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
