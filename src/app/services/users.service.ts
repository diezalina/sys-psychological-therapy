import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public db: AngularFirestore) { }

  getUsers() {
    /**
     * Get all administrative users from database
     * @return all admin. users from database
     */
    return this.db.collection('administrativeUsers').snapshotChanges();
  }

  deleteUser(id) {
    /**
     * Delete admin user from database
     * @param Admin user id: string
     * @return Updated user list
     */
    return this.db.collection('administrativeUsers').doc(id).delete();
  }

  createUser(value) {
    /**
     * Create admin user
     * @param User's data array
     * @return Successful operation
     */
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
    /**
     * Update admin user
     * @param Receive data to update
     * @return Updated user
     */
    return this.db.collection('administrativeUsers').doc(id).set(value);
  }
}
