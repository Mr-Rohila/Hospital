import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from '../user/Components/user-profile/user-profile.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { DoctorComponent } from '../admin/Components/doctor/doctor.component';

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
