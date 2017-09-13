import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyHeaderComponent } from './ad.header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MyHeaderComponent
  ],
  exports: [
    MyHeaderComponent
  ]
})
export class MyHeaderModule { }
