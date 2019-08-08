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

  addPatientNonPathologicalHistory(id, nonPathologicalHistoryData) {
    /**
     * Add patient's non pathological history
     * @params Receives specific patient's id and non pathological history
     * @returns Specific patient's non pathological history
     */
    return this.db.collection('patientsNonPathologicalHistory').add({
      patientId: id,
      // tslint:disable-next-line:radix
      patientNourishment: parseInt(nonPathologicalHistoryData.nourishment),
      patientFamilyPerformance: nonPathologicalHistoryData.familyPerformance,
      patientSocialPerformance: nonPathologicalHistoryData.socialPerformance,
      patientUsualMood: nonPathologicalHistoryData.usualMood,
      patientUsualStressLevels: nonPathologicalHistoryData.usualStressLevels,
      patientHygiene: nonPathologicalHistoryData.hygiene,
      // tslint:disable-next-line:radix
      patientLifeType: parseInt(nonPathologicalHistoryData.lifeType),
      patientSleepingHabits: nonPathologicalHistoryData.sleepingHabits,
      patientFreeTimeManagement: nonPathologicalHistoryData.freetimeManagement,
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
      patientId: id,
      patientRelativeBehaviorDisorder: familyHistoryData.relativeBehaviorDisorder,
      patientRelativeBDRelation: familyHistoryData.relativeBDRelation,
      patientRelativeChronicConditions: familyHistoryData.relativeChronicConditions,
      patientRelativeCCRelation: familyHistoryData.relativeCCRelation,
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
      patientId: id,
      patientPrescriptions: previousTreatmentsData.prescriptions,
      patientPrescriptionReaction: previousTreatmentsData.prescriptionReaction,
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
      patientId: id,
      patientSessionDate: evolutionData.sessionDate,
      patientSessionBitacora: evolutionData.sessionBitacora,
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
      patientId: id,
      patientAppearance: mentalExamData.appearance,
      patientDisposition: mentalExamData.disposition,
      patientMotorBehavior: mentalExamData.motorBehavior,
      patientMotion: mentalExamData.motion,
      patientGreeting: mentalExamData.greeting,
      patientVisualContact: mentalExamData.visualContact,
      patientDressStyle: mentalExamData.dressStyle,
      patientDressStyleCharacteristics: mentalExamData.dressStyleCharacteristics,
      patientAccessories: mentalExamData.accessories,
      patientFacies: mentalExamData.facies,
      patientLanguage: mentalExamData.language,
      patientTimeSpaceOrientation: mentalExamData.timeSpaceOrientation,
      patientSenperceptualAlteration: mentalExamData.senperceptualAlteration,
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
      patientId: id,
      patientPregnancy: devHistoryData.pregnancy,
      patientChildbirth: devHistoryData.childbirth,
      patientWorkHistory: devHistoryData.workHistory,
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
      patientId: id,
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
      patientId: id,
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
