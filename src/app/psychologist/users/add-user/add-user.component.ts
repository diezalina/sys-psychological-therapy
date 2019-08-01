import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AdministrativeUsers} from '../../../models/users';
import {UsersService} from '../../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  usrForm: FormGroup;
  usrList: AdministrativeUsers[];

  constructor(public usrServ: UsersService,
              private fb: FormBuilder,
              private router: Router) { }

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
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      pwd: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    });
  }

  onSubmit(value) {
    this.usrServ.createUser(value)
      .then(
        res => {
          this.resetFields();
          this.router.navigate(['users/add-user']);
        }
      );
  }

}
