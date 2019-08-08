import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {BehaviorSubject} from 'rxjs';
import * as firebase from 'firebase/app';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  adminUsr: any;
  patientUsr: any;
  private eventAuthError = new BehaviorSubject<string>('');
  eventAuthError$ = this.eventAuthError.asObservable();
  private value: boolean;

  constructor(private db: AngularFirestore,
              private afAuth: AngularFireAuth,
              private router: Router,
              public toastr: ToastrService) { }

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
        return this.value = true;
      })
      .catch(err => {
        this.eventAuthError.next(err);
      });
  }

  createPatientUser(user) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.pwd)
      .then(patientCredential => {
        this.patientUsr = user;
        patientCredential.user.updateProfile({
          displayName: user.name
        });
        this.insertPatient(patientCredential)
          .then(() => {
            this.router.navigate(['/patients'])
          });
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
    // Use set instead of add to set ID
    return this.db.doc(`patientUsers/${patientCredential.user.uid}`).set({
      patientName: this.patientUsr.name,
      // tslint:disable-next-line:radix
      patientAge: parseInt(this.patientUsr.age),
      // tslint:disable-next-line:radix
      patientSex: parseInt(this.patientUsr.sex),
      // tslint:disable-next-line:radix
      civilState: parseInt(this.patientUsr.civilState),
      patientBirthdate: this.patientUsr.birthdate,
      patientHometown: this.patientUsr.hometown,
      patientAddress: this.patientUsr.address,
      patientHomephone: this.patientUsr.homephone,
      patientCellphone: this.patientUsr.cellphone,
      patientOccupation: this.patientUsr.occupation,
      patientScholarity: this.patientUsr.scholarity,
      patientSEStatus: this.patientUsr.SEStatus, // Patient socioeconomic status
      patientReligion: this.patientUsr.religion,
      patientReference: this.patientUsr.reference,
      patientLegalGuardian: this.patientUsr.legalGuardian,
      patientInfoSource: this.patientUsr.infoSource,
      patientDescriptiveDiagnostic: this.patientUsr.descriptiveDiagnostic,
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
