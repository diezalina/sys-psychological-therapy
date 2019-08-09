import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject} from 'rxjs';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  adminUsr: any;
  patientUsr: any;
  private eventAuthError = new BehaviorSubject<string>('');
  eventAuthError$ = this.eventAuthError.asObservable();
  private value: boolean;
  private patientId = new BehaviorSubject<string>('');
  patientId$ = this.patientId.asObservable();

  constructor(private db: AngularFirestore,
              private afAuth: AngularFireAuth,
              private router: Router) { }

  createAdminUser(user) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.pwd)
      .then(usrCredential => {
        this.adminUsr = user;
        usrCredential.user.updateProfile({
          displayName: user.name
        });
        this.insertAdminUsr(usrCredential)
          .then(() => {
            this.router.navigate(['/users']);
          });
      })
      .then(res => {
        return true;
      })
      .catch(err => {
        this.eventAuthError.next(err);
      });
  }

  createPatientUser(user) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.pwd)
      .then(patientCredential => {
        this.patientUsr = user;
        patientCredential.user.updateProfile({
          displayName: user.name
        });
        this.insertPatient(patientCredential)
          .then(() => {
            this.patientId.next(patientCredential.user.uid);
          });
      })
      .then(res => {
        return true;
      })
      .catch(err => {
        this.eventAuthError.next(err);
      });
  }

  insertAdminUsr(usrCredential: firebase.auth.UserCredential) {
    /**
     * Create admin user such as psychologist and secretary
     * @param User's data array
     * @return Successful operation
     */
    return this.db.doc(`administrativeUsers/${usrCredential.user.uid}`).set({
      usrName: this.adminUsr.name,
      usrEmail: this.adminUsr.email,
      // tslint:disable-next-line:radix
      usrRole: parseInt(this.adminUsr.role)
    });
  }

  insertPatient(patientCredential: firebase.auth.UserCredential) {
    /**
     * Create patient's basic information
     * @param Patient's data to add
     * @return updated patient
     */
    return this.db.doc(`patientUsers/${patientCredential.user.uid}`).set({
      patientEmail: this.patientUsr.email,
      patientName: this.patientUsr.name,
      // tslint:disable-next-line:radix
      patientAge: parseInt(this.patientUsr.age),
      // tslint:disable-next-line:radix
      patientSex: parseInt(this.patientUsr.sexo),
      // tslint:disable-next-line:radix
      civilState: parseInt(this.patientUsr.civil),
      patientBirthdate: this.patientUsr.birthdate,
      patientHometown: this.patientUsr.hometown,
      patientAddress: this.patientUsr.address,
      patientHomephone: this.patientUsr.homephone,
      patientCellphone: this.patientUsr.cellphone,
      patientOccupation: this.patientUsr.occupation,
      patientScholarity: this.patientUsr.scholarity,
      patientSEStatus: this.patientUsr.se, // Patient socioeconomic status
      patientReligion: this.patientUsr.religion,
      patientReference: this.patientUsr.reference,
      patientLegalGuardian: this.patientUsr.guardian,
      patientInfoSource: this.patientUsr.source,
      patientDescriptiveDiagnostic: this.patientUsr.diagnostic,
      patientPronostic: this.patientUsr.pronostic
    });
  }

  login(email: string, pwd: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, pwd)
      .catch(err => {
        this.eventAuthError.next(err);
      })
      .then(usrCredential => {
        if (usrCredential) {
          this.router.navigate(['home']);
        }
      });
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  getUsrState() {
    return this.afAuth.authState;
  }

}
