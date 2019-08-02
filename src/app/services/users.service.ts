import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AdministrativeUsers} from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public db: AngularFirestore) { }

  getUsers() {
    return this.db.collection('administrativeUsers').snapshotChanges();
  }

  deleteUser(id) {
    return this.db.collection('administrativeUsers').doc(id).delete();
  }

  createUser(value) {
    return this.db.collection('administrativeUsers').add({
      usrName: value.name,
      usrEmail: value.email,
      usrPwd: value.pwd,
      // tslint:disable-next-line:radix
      usrRole: parseInt(value.role),
      dateInsert: Date()
    });
  }

  updateUser(id, value) {
    return this.db.collection('users').doc(id).set(value);
  }
}
