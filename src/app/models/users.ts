export interface Roles {
  reader: boolean;
  psicologo?: boolean;
  paciente?: boolean;
  secretaria?: boolean;
}

export interface AdministrativeUsers {
    id?: string;
    uid: string;
    usrName: string;
    usrEmail: string;
    usrRole: number;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}

export interface PatientUser {
    id?: string;
    uid: string;
    patientName: string;
    patientEmail: string;
    patientAge: number;
    patientSex: number;
    civilState: number;
    patientBirthdate: Date;
    patientHometown: string;
    patientAddress: string;
    patientHomephone: string;
    patientCellphone: string;
    patientOccupation: string;
    patientScholarity: number;
    patientSEStatus: string;
    patientReligion: string;
    patientReference: string;
    patientLegalGuardian: string;
    patientInfoSource: string;
    patientDescriptiveDiagnostic: string;
    patientPronostic: string;
    usrInsert?: string;
    dateInsert?: Date;
    usrUpdate?: string;
    dateUpdate?: Date;
}
