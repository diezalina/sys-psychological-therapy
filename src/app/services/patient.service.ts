import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(public db: AngularFirestore) { }

  getPatients() {
    /**
     * Get all patients from database
     * @return all users
     */
    return this.db.collection('patientUsers').snapshotChanges();
  }

  deletePatient(id) {
    /**
     * Delete patient from database
     * @param patient id
     * @return database changes
     */
    return this.db.collection('patientUsers').doc(id).delete();
  }

  createPatient(patientData) {
    /**
     * Create patient's basic information
     * @param Patient's data array
     * @return server response
     */
    return this.db.collection('patientUsers').add({
      patientName: patientData.name,
      // tslint:disable-next-line:radix
      patientAge: parseInt(patientData.age),
      // tslint:disable-next-line:radix
      patientSex: parseInt(patientData.sex),
      // tslint:disable-next-line:radix
      civilState: parseInt(patientData.civilState),
      patientBirthdate: patientData.birthdate,
      patientHometown: patientData.hometown,
      patientAddress: patientData.address,
      patientHomephone: patientData.homephone,
      patientCellphone: patientData.cellphone,
      patientOccupation: patientData.occupation,
      patientScholarity: patientData.scholarity,
      patientSEStatus: patientData.SEStatus, // Patient socioeconomic status
      patientReligion: patientData.religion,
      patientReference: patientData.reference,
      patientLegalGuardian: patientData.legalGuardian,
      patientInfoSource: patientData.infoSource,
      patientDescriptiveDiagnostic: patientData.descriptiveDiagnostic,
      patientPronostic: patientData.pronostic,
      usrInsert: Date.now()
    });
  }

  updatePatient(id, patientData) {
    /**
     * Update patient's basic data
     * @param patient basic info
     * @return updated patient
     */
    return this.db.collection('patientUsers').doc(id).set(patientData);
  }


}
