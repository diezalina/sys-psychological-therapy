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
     * @param Patient's data to add
     * @return updated patient
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
      dateInsert: Date.now()
    });
  }

  updatePatient(id, patientData) {
    /**
     * Update patient's basic data
     * @param patient basic info & patient id
     * @returns updated patient information
     */
    return this.db.collection('patientUsers').doc(id).set(patientData);
  }

  addPatientConsultMotivation(id, consultMotivationData) {
    /**
     * Add patient's consult motivation
     * @params Consult motivation from interview data and patient's id
     * @returns Specific patients consult motivation
     */
    return this.db.collection('patientsConsultMotivation').add({
      patientId: id,
      patientConsultAssistanceMotive: consultMotivationData.assistanceMotive,
      patientConsultPresentSymptoms: consultMotivationData.presentSymptoms,
      patientConsultCurrentCondition: consultMotivationData.currentCondition,
      patientConsultApproximateBeginning: consultMotivationData.approximateBeginning,
      patientConsultManner: consultMotivationData.manner,
      patientConsultCharacteristics: consultMotivationData.characteristics,
      patientConsultUnchainedBy: consultMotivationData.unchainedBy,
      patientConsultCoincidence: consultMotivationData.coincidence,
      patientConsultConsequences: consultMotivationData.consequences,
      patientConsultEvolution: consultMotivationData.evolution,
      dateInsert: Date.now()
    });
  }

  addPatientMultiaxisDiagnostic(id, multiaxisDiagnosticData) {
    /**
     * Add patient's multiaxial diagnostic
     * @params Receives patients' id and multiaxial diagnostic data
     * @returns Specific patient's multiaxial diagnostic
     */
    return this.db.collection('patientsMultiaxisDiagnostic').add({
      patientId: id,
      patientAxisOne: multiaxisDiagnosticData.axisOne,
      patientAxisTwo: multiaxisDiagnosticData.axisTwo,
      patientAxisThree: multiaxisDiagnosticData.axisThree,
      patientAxisFour: multiaxisDiagnosticData.axisFour,
      dateInsert: Date.now()
    });
  }

  addPatientPathologicalHistory(id, pathologicalHistoryData) {
    /**
     * Add patient's pathological history
     * @params Receive patients pathological history and patient id
     * @returns Specific patient's pathological history
     */
    return this.db.collection('patientsPathologicalHistory').add({
      patientId: id,
      patientPreviousIllnesses: pathologicalHistoryData.previousIllnesses,
      patientBrainTrauma: pathologicalHistoryData.brainTrauma,
      patientLossOfKnowledgeDate: pathologicalHistoryData.lossOfKnowledgeDate,
      patientLossOfKnowledgeDesc: pathologicalHistoryData.lossOfKnowledgeDesc,
      patientSeizures: pathologicalHistoryData.seizures,
      patientSeizuresCharacteristics: pathologicalHistoryData.seizuresCharacteristics,
      patientSubstanceUse: pathologicalHistoryData.substanceUse,
      patientAccidents: pathologicalHistoryData.accidents,
      patientSurgeries: pathologicalHistoryData.surgeries,
      dateInsert: Date.now()
    });
  }

  // TODO: Finish add non pathological history
  addPatientNonPathologicalHistory(id, nonPathologicalHistoryData) {
    /**
     * Add patient's non pathological history
     * @params Receives specific patient's id and non pathological history
     * @returns Specific patient's non pathological history
     */
    return this.db.collection('patientsNonPathologicalHistory').add({
      patientId: id,
    });
  }
}
