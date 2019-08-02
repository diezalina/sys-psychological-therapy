import { Component, OnInit } from '@angular/core';
import {AdministrativeUsers} from '../../../models/users';
import {UsersService} from '../../../services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: AdministrativeUsers[];
  roles = [
    {
      val: 1,
      display: 'Psicologo'
    },
    {
      val: 2,
      display: 'Secretaria'
    }];

  constructor(public usrServ: UsersService, private router: Router) { }

  ngOnInit() {
    this.usrServ.getUsers()
      .subscribe(res => {
        this.users = res.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data()
          } as AdministrativeUsers;
        });
      });
  }



  onEdit(id, usr: AdministrativeUsers) {
    this.usrServ.updateUser(id, usr)
      .then(
        res => {
          this.router.navigate(['/users']);
        }
      );
  }

  onDelete(id) {
    this.usrServ.deleteUser(id)
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
