import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdHeaderComponent } from './ad.header.component';
import { AdLogoutModule } from '../ad-logout/ad.logout.module';

@NgModule({
  imports: [
    CommonModule,
    AdLogoutModule
  ],
  declarations: [AdHeaderComponent],
  exports: [AdHeaderComponent]
})
export class AdHeaderModule { }
