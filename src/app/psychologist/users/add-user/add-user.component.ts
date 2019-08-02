import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdministrativeUsers} from '../../../models/users';
import {UsersService} from '../../../services/users.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  usrForm: FormGroup;
  roles = [
    {
      val: 1,
      display: 'Psicologo'
    },
    {
      val: 2,
      display: 'Secretaria'
    }];

  constructor(public usrServ: UsersService,
              private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
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
    this.usrServ.createUser(value)
      .then(
        res => {
          this.resetFields();
          this.toastr.success('Se añadió correctamente el usuario', 'Éxito');
          this.router.navigate(['users']);
        }
      );
  }

}
