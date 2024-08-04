import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DoctorComponent } from '../admin/components/doctor/doctor.component';
import { UserProfileComponent } from '../user/components/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  },
  {
    path: 'userProfile',
    component: UserProfileComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: 'doctors',
    component: DoctorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
