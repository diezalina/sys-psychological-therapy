import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { NotasComponent } from './notas/notas.component';

@NgModule({
  declarations: [NotasComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PatientModule { }
