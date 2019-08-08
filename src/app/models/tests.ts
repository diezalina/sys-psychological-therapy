export interface Tests {
    patientTests: PatientTests;
    appliedTests: AppliedTests[];
    psychTests: PsychTests[];
    questionsPsychTests: QuestionsPsychTests[];
    automatedTestsResult: AutomatedTestsResult[];
}

export interface PatientTests {
    id?: string;
    patientId: string;
    superiorMentalHF: string;
    selfconcept: string;
    attentionConcentration: string;
    sicknessConsciousness: string;
    cotransference: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface AppliedTests {
    id?: string;
    psychTestId: string;
    patientId: string;
    appliedTestResult: number;
    dateApplied: Date;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PsychTests {
    id?: string;
    name: string;
    description: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface QuestionsPsychTests {
    id?: string;
    psychTestId: string;
    name: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface AutomatedTestsResult {
    id?: string;
    psychTestId: string;
    patientId: string;
    resultPatient: string;
    resultAnalysis: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}
