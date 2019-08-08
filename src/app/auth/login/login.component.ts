import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFrm: FormGroup;

  constructor(private authServ: AuthService,
              public fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.loginFrm = this.fb.group({
      email: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

  login(frm) {
    this.authServ.login(frm.email, frm.pwd);
  }

}
