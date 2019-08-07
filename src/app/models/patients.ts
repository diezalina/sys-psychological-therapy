import { PatientUser } from './users';

export interface Patients {
    PatientBase: PatientUser;
    multiaxialDiagnostic?: PatientMultiaxialDiagnostic;
    therapeuticPlan?: PatientTherapeuticPlan;
    evolution?: PatientsEvolution;
    previousTreatments?: PatientsPreviousTreatments;
    familyRelations?: PatientsFamilyRelations;
    developmentHistory?: PatientsDevelopmentHistory;
    familyDynamic?: PatientsFamilyDynamic;
    significativeEvents?: PatientsSignificativeEvents;
    mentalExam?: PatientsMentalExam;
    pathologicalHistory?: PatientsPathologicalHistory;
    nonpathologicalHistory?: PatientsNonPathologicalHistory;
    consultMotivation?: PatientsConsultMotivation;
    familyHistory?: PatientsFamilyHistory;
}

export interface PatientMultiaxialDiagnostic {
    id?: string;
    patientId: string;
    patientAxisOne: string;
    patientAxisTwo: string;
    patientAxisThree: string;
    patientAxisFour: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientTherapeuticPlan {
    id?: string;
    patientId: string;
    usrId: string;
    patientTherapeuticPlan: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsEvolution {
    id?: string;
    patientId: string;
    patientSessionDate: Date;
    patientSessionBitacora: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsPreviousTreatments {
    id?: string;
    patientId: string;
    patientPrescriptions: string;
    patientPrescriptionsReaction: string;
    patientSelfmedication: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsFamilyRelations {
    id?: string;
    patientFamilyDynamicId: string;
    familyAdjectiveId: FamilyAdjectives[];
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface FamilyAdjectives {
    id?: string;
    name: string;
}

export interface PatientsFamilyDynamic {
    id?: string;
    patientId: string;
    patientFamilyDesc: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsDevelopmentHistory {
    id?: string;
    patientId: string;
    patientPregnancy: string;
    patientChildbirth: string;
    patientWorkHistory: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsSignificativeEvents {
    id?: string;
    patientDevelopmentHistoryId: string;
    significativeEventId: string;
    patientSignificativeEventDesc: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface SignificativeEventsTypes {
    id?: string;
    eventName: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsMentalExam {
    id?: string;
    patientId: string;
    patientAppearance: string;
    patientDisposition: string;
    patientMotorBehavior: string;
    patientMotion: string;
    patientGreeting: string;
    patientVisualContact: string;
    patientDressStyle: string;
    patientDressStyleCharacteristics: string;
    paitentAccesories: string;
    patientFacies: string;
    patientLanguage: string;
    patientTimeSpaceOrientation: string;
    patinetSenperceptualAlteration: string;
    patientCoordination: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsPathologicalHistory {
    id?: string;
    patientId: string;
    previousIllnesses: string;
    brainTrauma: string;
    lossOfKnowledgeDate: Date;
    lossOfKnowledgeDesc: string;
    seizures: string;
    seizuresCharacteristics: string;
    substanceUse: string;
    accidents: string;
    surgeries: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsConsultMotivation {
    id?: string;
    patientId: string;
    patientAssitanceMotive: string;
    patientPresentSymptoms: string;
    patientCurrentCondition: string;
    patientApproximateBeginning: Date;
    patientManner: string;
    patientCharacteristics: string;
    patientUnchainedBy: string;
    patientCoincidence: string;
    patientConsequences: string;
    patientEvolution: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsFamilyHistory {
    id?: string;
    patientId: string;
    relativeBehaviorDisorder: string;
    relativeBDRelation: string;
    relativeChronicConditions: string;
    relativeCCRelation: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsNonPathologicalHistory {
    id?: string;
    patientId: string;
    nourishment: string;
    familyPerformance: string;
    socialPerformance: string;
    usualMood: string;
    usualStressLevels: string;
    hygiene: string;
    sleepingHabits: string;
    freetimeManagement: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}
