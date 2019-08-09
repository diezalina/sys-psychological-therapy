import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import {UsersComponent} from './psychologist/users/users/users.component';
import {PatientComponent} from './psychologist/patient/patient/patient.component';
import {LoginComponent} from './auth/login/login.component';
import {InfoPatientComponent} from './psychologist/patient/info-patient/info-patient.component';

const routes: Routes = [
  {
    path: 'home',
    component: CalendarComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'patient',
    component: PatientComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'info-patient',
    component: InfoPatientComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
