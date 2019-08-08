import { Component, OnInit } from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  usrForm: FormGroup;
  authError: any;
  roles = [
    {
      val: 1,
      display: 'Psicologo'
    },
    {
      val: 2,
      display: 'Secretaria'
    }];

  constructor(private authServ: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.authServ.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
    this.createForm();
  }

  createForm() {
    this.usrForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      pwd: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  resetFields() {
    this.usrForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', Validators.required],
      pwd: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit(value) {
    this.authServ.createAdminUser(value);
    this.resetFields();
  }

  onStatus(message, val: boolean) {
    if (val === true) {
      this.toastr.success('Se agregó el usuario con éxito', 'Éxito');
    } else {
      this.toastr.error(message, 'Ha ocurrido un error');
    }
  }

}
