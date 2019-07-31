export interface Tests {
    patientTests: patientTests;
    appliedTests: appliedTests[];
    psychTests: psychTests[];
    questionsPsychTests: questionsPsychTests[];
    automatedTestsResult: automatedTestsResult[];
}

export interface patientTests {
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

export interface appliedTests {
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

export interface psychTests {
    id?: string;
    name: string;
    description: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface questionsPsychTests {
    id?: string;
    psychTestId: string;
    name: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface automatedTestsResult {
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