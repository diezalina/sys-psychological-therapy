import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './users/add-user/add-user.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AddUserComponent]
})
export class PsychologistModule { }
