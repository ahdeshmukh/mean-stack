import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdHeaderComponent } from './ad.header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdHeaderComponent],
  exports: [AdHeaderComponent]
})
export class AdHeaderModule { }
