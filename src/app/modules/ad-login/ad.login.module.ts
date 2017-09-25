import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdLoginComponent } from './ad.login.component';

import { AdRegistrationModule } from '../ad-registration/ad.registration.module'

@NgModule({
  imports: [CommonModule, AdRegistrationModule],
  declarations: [AdLoginComponent],
  exports: [AdLoginComponent]
})
export class AdLoginModule { }
