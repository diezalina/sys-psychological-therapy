import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../../../services/patient.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patientForm: FormGroup;
  sexos = [
    {
      val: 1,
      display: 'Femenino'
    },
    {
      val: 2,
      display: 'Masculino'
    }];
  civils = [
    {
      val: 1,
      display: 'Soltero'
    },
    {
      val: 2,
      display: 'Casado'
    },
    {
      val: 3,
      display: 'Divorciado'
    },
    {
      val: 4,
      display: 'Viudo'
    }];
  ses = [
    {
      val: 1,
      display: 'Alto'
    },
    {
      val: 2,
      display: 'Medio'
    },
    {
      val: 3,
      display: 'Alto'
    }];
  scholaritys = [
    {
      val: 1,
      display: 'Primaria'
    },
    {
      val: 2,
      display: 'Secundaria'
    },
    {
      val: 3,
      display: 'Preparatoria'
    },
    {
      val: 4,
      display: 'Licenciatura'
    }];

  constructor(public patientServ: PatientService,
              private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      sexo: ['', Validators.required],
      civil: ['', Validators.required],
      birthdate: ['', Validators.required],
      hometown: ['', Validators.required],
      address: ['', Validators.required],
      homephone: ['', Validators.required],
      cellphone: ['', Validators.required],
      ocupation: ['', Validators.required],
      scholarity: ['', Validators.required],
      se: ['', Validators.required],
      religion: ['', Validators.required],
      reference: ['', Validators.required],
      guardian: ['', Validators.required],
      source: ['', Validators.required],
      diagnostic: ['', Validators.required],
      pronostic: ['', Validators.required]
    });
  }

  resetFields() {
    this.patientForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      sexo: ['', Validators.required],
      civil: ['', Validators.required],
      birthdate: ['', Validators.required],
      hometown: ['', Validators.required],
      address: ['', Validators.required],
      homephone: ['', Validators.required],
      cellphone: ['', Validators.required],
      ocupation: ['', Validators.required],
      scholarity: ['', Validators.required],
      se: ['', Validators.required],
      religion: ['', Validators.required],
      reference: ['', Validators.required],
      guardian: ['', Validators.required],
      source: ['', Validators.required],
      diagnostic: ['', Validators.required],
      pronostic: ['', Validators.required]
    });
  }

  onSubmit(value) {
    /* this.patientServ.createPatient(value)
      .then(
        res => {
          this.resetFields();
          this.toastr.success('Se añadió correctamente el usuario', 'Éxito');
          this.router.navigate(['users']);
        }
      ); */
  }
}
