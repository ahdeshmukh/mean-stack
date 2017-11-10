import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdHomeComponent } from './modules/ad-home/ad.home.component';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: AdHomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }