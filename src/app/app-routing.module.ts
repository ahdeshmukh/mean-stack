import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdHomeComponent } from './modules/ad-home/ad.home.component';
import { AnonymousGuardService } from './services/auth/anonymous.guard.service';

// { path: '**', redirectTo: '/', pathMatch: 'full' } is to catch unmatched routes, otherwise app breaks
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', component: AdHomeComponent, canActivate:[AnonymousGuardService]},
  { path: '**', redirectTo: 'todos', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AnonymousGuardService
  ]
})
export class AppRoutingModule { }