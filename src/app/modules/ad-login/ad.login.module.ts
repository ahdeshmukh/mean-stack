import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdLoginComponent } from './ad.login.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdLoginComponent],
  exports: [AdLoginComponent]
})
export class AdLoginModule { }
