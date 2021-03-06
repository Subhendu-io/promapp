import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from '../components/pages/login/login.component';
import { DashboardComponent } from '../components/pages/dashboard/dashboard.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,  canActivate: [ AuthGuard ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
