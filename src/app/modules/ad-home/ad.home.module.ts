import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdHomeComponent } from './ad.home.component';

import { AdLoginModule } from '../ad-login/ad.login.module'
import { AdRegistrationModule } from '../ad-registration/ad.registration.module'

@NgModule({
  imports: [
    CommonModule,
    AdLoginModule,
    AdRegistrationModule
  ],
  declarations: [AdHomeComponent],
  exports: [AdHomeComponent]
})
export class AdHomeModule { }
