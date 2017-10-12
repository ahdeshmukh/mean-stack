import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdRegistrationComponent } from './ad.registration.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AdRegistrationComponent],
  exports: [AdRegistrationComponent]
})

export class AdRegistrationModule { }
