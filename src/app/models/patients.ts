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
    axisOne: string;
    axisTwo: string;
    axisThree: string;
    axisFour: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientTherapeuticPlan {
    id?: string;
    patientId: string;
    usrId: string;
    therapeuticPlan: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsEvolution {
    id?: string;
    patientId: string;
    sessionDate: Date;
    sessionBitacora: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsPreviousTreatments {
    id?: string;
    patientId: string;
    prescriptions: string;
    prescriptionsReaction: string;
    selfmedication: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsFamilyRelations {
    id?: string;
    familyDynamic: string;
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
    pregnancy: string;
    childbirth: string;
    workHistory: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientsSignificativeEvents {
    id?: string;
    developmentHistoryId: string;
    significativeEventId: string;
    significativeEventDesc: string;
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
    appearance: string;
    disposition: string;
    motorBehavior: string;
    motion: string;
    greeting: string;
    visualContact: string;
    dressStyle: string;
    dressStyleCharacteristics: string;
    accesories: string;
    facies: string;
    language: string;
    timeSpaceOrientation: string;
    senperceptualAlteration: string;
    coordination: string;
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
    assitanceMotive: string;
    presentSymptoms: string;
    currentCondition: string;
    approximateBeginning: Date;
    manner: string;
    characteristics: string;
    unchainedBy: string;
    coincidence: string;
    consequences: string;
    evolution: string;
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
