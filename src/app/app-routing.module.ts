import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdHomeComponent } from './modules/ad-home/ad.home.component';

// { path: '**', redirectTo: '/', pathMatch: 'full' } is to catch unmatched routes, otherwise app breaks
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: AdHomeComponent},
  { path: '**', redirectTo: 'todos', pathMatch: 'full' }
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