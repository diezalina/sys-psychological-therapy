import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './users/add-user/add-user.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserListComponent } from './users/user-list/user-list.component';
import { UsersComponent } from './users/users/users.component';
import {RouterModule} from '@angular/router';
import { AddPatientComponent } from './patient/add-patient/add-patient.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientComponent } from './patient/patient/patient.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { InfoPatientComponent } from './patient/info-patient/info-patient.component';

@NgModule(
  {declarations: [
    AddUserComponent,
    UserListComponent,
    UsersComponent,
    AddPatientComponent,
    PatientListComponent,
    PatientComponent,
    InfoPatientComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule
  ],
  exports: [AddUserComponent, UserListComponent, PatientListComponent, AddPatientComponent]
})
export class PsychologistModule { }
