import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {BehaviorSubject} from 'rxjs';
import {AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patientId = new BehaviorSubject<string>('');
  constructor(public db: AngularFirestore, public afDoc: AngularFirestoreDocument) { }

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
      patientId: this.db.collection('patientUsers', ref => ref.where('id', '==', id)),
      patientConsultAssistanceMotive: consultMotivationData.consultMotive,
      patientConsultPresentSymptoms: consultMotivationData.consultSymptoms,
      patientConsultCurrentCondition: consultMotivationData.consultCondition,
      patientConsultApproximateBeginning: consultMotivationData.consultBeginning,
      patientConsultManner: consultMotivationData.consultManner,
      patientConsultCharacteristics: consultMotivationData.consultCharacteristics,
      patientConsultUnchainedBy: consultMotivationData.consultUnchained,
      patientConsultCoincidence: consultMotivationData.consultCoincidence,
      patientConsultConsequences: consultMotivationData.consultConsequences,
      patientConsultEvolution: consultMotivationData.consultEvolution,
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
      patientId: 'patientUsers/' + id,
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
      patientId: 'patientUsers/' + id,
      patientPreviousIllnesses: pathologicalHistoryData.illnesses,
      patientBrainTrauma: pathologicalHistoryData.brain,
      patientLossOfKnowledgeDate: pathologicalHistoryData.knowledgeDate,
      patientLossOfKnowledgeDesc: pathologicalHistoryData.knowledgeDesc,
      patientSeizures: pathologicalHistoryData.seizures,
      patientSeizuresCharacteristics: pathologicalHistoryData.seizuresDesc,
      patientSubstanceUse: pathologicalHistoryData.substance,
      patientAccidents: pathologicalHistoryData.accidents,
      patientSurgeries: pathologicalHistoryData.surgeries,
      dateInsert: Date.now()
    });
  }

  addPatientNonPathologicalHistory(id, nonPathologicalHistoryData) {
    /**
     * Add patient's non pathological history
     * @params Receives specific patient's id and non pathological history
     * @returns Specific patient's non pathological history
     */
    return this.db.collection('patientsNonPathologicalHistory').add({
      patientId: 'patientUsers/' + id,
      // tslint:disable-next-line:radix
      patientNourishment: parseInt(nonPathologicalHistoryData.nourishment),
      patientFamilyPerformance: nonPathologicalHistoryData.family,
      patientSocialPerformance: nonPathologicalHistoryData.social,
      patientUsualMood: nonPathologicalHistoryData.mood,
      patientUsualStressLevels: nonPathologicalHistoryData.stress,
      patientHygiene: nonPathologicalHistoryData.hygiene,
      // tslint:disable-next-line:radix
      patientLifeType: parseInt(nonPathologicalHistoryData.life),
      patientSleepingHabits: nonPathologicalHistoryData.sleeping,
      patientFreeTimeManagement: nonPathologicalHistoryData.time,
      dateInsert: Date.now()
    });
  }

  addPatientFamilyHistory(id, familyHistoryData) {
    /**
     * Add patient's family history
     * @params Patient id and family history
     * @returns specific patient's family history
     */
    return this.db.collection('patientsFamilyHistory').add({
      patientId: 'patientUsers/' + id,
      patientRelativeBehaviorDisorder: familyHistoryData.disorder,
      patientRelativeBDRelation: familyHistoryData.disorderRelation,
      patientRelativeChronicConditions: familyHistoryData.chronic,
      patientRelativeCCRelation: familyHistoryData.chronicRelation,
      dateInsert: Date.now()
    });
  }

  addPatientPreviousTreatments(id, previousTreatmentsData) {
    /**
     * Add patient's previous treatments
     * @params Previous treatments the patient received and patient id
     * @returns Specific patient's previous treatments
     */
    return this.db.collection('patientsPreviousTreatments').add({
      patientId: 'patientUsers/' + id,
      patientPrescriptions: previousTreatmentsData.prescriptions,
      patientPrescriptionReaction: previousTreatmentsData.reaction,
      patientSelfmedication: previousTreatmentsData.selfmedication,
      dateInsert: Date.now()
    });
  }

  addPatientEvolution(id, evolutionData) {
    /**
     * Add patient's evolution relevant to sessions
     * @params patient id and evolution
     * @returns specific patient's evolution
     */
    return this.db.collection('patientsEvolution').add({
      patientId: 'patientUsers/' + id,
      patientSessionDate: evolutionData.date,
      patientSessionBitacora: evolutionData.bitacora,
      dateInsert: Date.now()
    });
  }

  addPatientMentalExam(id, mentalExamData) {
    /**
     * Add patient's mental exam data
     * @params patient id and mental exam information
     * @returns specific patient's mental exam
     */
    return this.db.collection('patientsMentalExam').add({
      patientId: 'patientUsers/' + id,
      patientAppearance: mentalExamData.appearance,
      patientDisposition: mentalExamData.dispotition,
      patientMotorBehavior: mentalExamData.motor,
      patientMotion: mentalExamData.motion,
      patientGreeting: mentalExamData.greeting,
      patientVisualContact: mentalExamData.visualContact,
      patientDressStyle: mentalExamData.dress,
      patientDressStyleCharacteristics: mentalExamData.dressDesc,
      patientAccessories: mentalExamData.accessories,
      patientFacies: mentalExamData.facies,
      patientLanguage: mentalExamData.language,
      patientTimeSpaceOrientation: mentalExamData.orientation,
      patientSenperceptualAlteration: mentalExamData.senperceptual,
      patientCoordination: mentalExamData.coordination,
      dateInsert: Date.now()
    });
  }

  addPatientDevelopmentHistory(id, devHistoryData) {
    /**
     * Add patient's development history
     * @params patient's id and development history
     * @returns patient's development history
     */
    return this.db.collection('patientsDevelopmentHistory').add({
      patientId: 'patientUsers/' + id,
      patientPregnancy: devHistoryData.pregnancy,
      patientChildbirth: devHistoryData.childbirth,
      patientWorkHistory: devHistoryData.work,
      dateInsert: Date.now()
    });
  }

  addPatientSignificativeEvents(id, devHistoryId, sEventTypeId, significativeEventsData) {
    /**
     * Add patient's signigicative events, related to development history
     * @params patient id, development history, significative event typ id and patient's significative events
     * @returns specific patient's significative events
     */
    return this.db.collection('patientsSignificativeEvents').add({
      patientId: 'patientUsers/' + id,
      patientDevelopmentHistoryId: devHistoryId,
      signifivativeEventTypeId: sEventTypeId,
      patientSignificativeEventsDesc: significativeEventsData.eventDesc,
      dateInsert: Date.now()
    });
  }

  addSignificativeEventType(significateEventTypeData) {
    /**
     * Add new significative event type
     * @params Significative event type data
     * @returns New signigicative event type
     */
    return this.db.collection('significativeEventsType').add({
      significativeEventName: significateEventTypeData.name,
      significativeEventExample: significateEventTypeData.example,
      dateInsert: Date.now()
    });
  }

  addPatientFamilyDynamic(id, familyDynamicData) {
    /**
     * Add a patient's family dynamic
     * @params patient id and family dynamic data
     * @returns specific patient's family dynamic
     */
    return this.db.collection('patientsFamilyDynamic').add({
      patientId: 'patientUsers/' + id,
      patientFamilyDesc: familyDynamicData.description,
      dateInsert: Date.now()
    });
  }

  addPatientFamilyRelations(familyDynamicId, familyAdjId, familyRelationsData) {
    /**
     * Add a patient's family relations, specifically adjectives related to it
     * @params patient's family dynamc id, family adjective id and relevant data
     * @returns Specific patient's family relations based on family dynamic
     */
    return this.db.collection('patientsFamilyRelations').add({
      patientFamilyDynamicId: familyDynamicId,
      familyAdjectiveId: familyAdjId,
      dateInsert: Date.now()
    });
  }

  addFamilyAdjectives(familyAdjectiveData) {
    return this.db.collection('familyAdjectives').add({
      name: familyAdjectiveData.name,
      dateInsert: Date.now()
    });
  }

  // TODO: Patients therapeutic plan

}
