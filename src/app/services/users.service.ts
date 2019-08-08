import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {passBoolean} from 'protractor/built/util';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';

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

  updateUser(id, value) {
    /**
     * Update admin user
     * @param Receive data to update
     * @return Updated user
     */
    return this.db.collection('administrativeUsers/').doc(id).set(value);
  }
}
