import { Component, OnInit } from '@angular/core';
import {PatientUser} from '../../../models/users';
import {PatientService} from '../../../services/patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  users: PatientUser[];

  constructor(public patientServ: PatientService, private router: Router) { }

  ngOnInit() {
    this.patientServ.getPatients()
      .subscribe(res => {
        this.users = res.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as PatientUser;
        });
      });
  }



  onEdit(id, usr: PatientUser) {
    this.patientServ.updatePatient(id, usr)
      .then(
        res => {
          this.router.navigate(['/users']);
        }
      );
  }

  onDelete(id) {
    this.patientServ.deletePatient(id)
      .then(
        res => {
          this.router.navigate(['users']);
        },
        err => {
          console.log(err);
        }
      );
  }
}
