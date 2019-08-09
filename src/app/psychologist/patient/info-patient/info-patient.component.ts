import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../services/auth.service';
import {BehaviorSubject} from 'rxjs';
import {PatientService} from '../../../services/patient.service';

@Component({
  selector: 'app-info-patient',
  templateUrl: './info-patient.component.html',
  styleUrls: ['./info-patient.component.css']
})
export class InfoPatientComponent implements OnInit {
  consultForm: FormGroup;
  multiaxisForm: FormGroup;
  pathologicalForm: FormGroup;
  nonPathologicalForm: FormGroup;
  familyForm: FormGroup;
  treatmentsForm: FormGroup;
  evolutionForm: FormGroup;
  mentalForm: FormGroup;
  developmentForm: FormGroup;
  eventForm: FormGroup;
  familyDynamicForm: FormGroup;
  patientId: string;

// consultForm opciones
  consultMotives = [
    {
      val: 1,
      display: 'Voluntaria'
    },
    {
      val: 2,
      display: 'Involuntaria'
    },
    {
      val: 3,
      display: 'Condicionada'
    }];
  consultManners = [
    {
      val: 1,
      display: 'Subita'
    },
    {
      val: 2,
      display: 'Insidiosa'
    },
    {
      val: 3,
      display: 'Incierta'
    }];
  // nonPathologicalForm opciones
  nourishmentTypes = [
    {
      val: 1,
      display: 'adecuada'
    },
    {
      val: 2,
      display: 'insuficiente'
    },
    {
      val: 3,
      display: 'inadecuada'
    },
    {
      val: 4,
      display: 'insuficiente'

    }];
  stressLevels = [
    {
      val: 1,
      display: 'Alto'
    },
    {
      val: 2,
      display: 'Medio'
    },
    {
      val: 3,
      display: 'Bajo'
    }];
  lifeTypes = [
    {
      val: 1,
      display: 'Dinámico'
    },
    {
      val: 2,
      display: 'Sedentario'
    }];
// mentalForm opciones
  aspectos = [
    {
      val: 1,
      display: 'aliño'
    },
    {
      val: 2,
      display: 'bueno'
    },
    {
      val: 3,
      display: 'regular'
    },
    {
      val: 4,
      display: 'malo'
    }];
  disposiciones = [
    {
      val: 1,
      display: 'buena'
    },
    {
      val: 2,
      display: 'mala'
    }];
  conductas = [
    {
      val: 1,
      display: 'normal'
    },
    {
      val: 2,
      display: 'anormal'
    },
    {
      val: 3,
      display: 'disminuida'
    },
    {
      val: 4,
      display: 'aumentada'
    },
    {
      val: 5,
      display: 'congruente'
    },
    {
      val: 6,
      display: 'incongruente'
    }];
  saludos = [
    {
      val: 1,
      display: 'cordial'
    },
    {
      val: 2,
      display: 'agresivo'
    },
    {
      val: 3,
      display: 'tenso'
    },
    {
      val: 4,
      display: 'respetuoso'
    },
    {
      val: 5,
      display: 'ausente'
    },
    {
      val: 6,
      display: 'sincero'
    },
    {
      val: 7,
      display: 'obligado'
    }];
  contactos = [
    {
      val: 1,
      display: 'adecuado'
    },
    {
      val: 2,
      display: 'inadecuado'
    },
    {
      val: 3,
      display: 'evasivo'
    },
    {
      val: 4,
      display: 'retador'
    },
    {
      val: 5,
      display: 'fijo'
    },
    {
      val: 6,
      display: 'variable'
    }];
  vestimentas = [
    {
      val: 1,
      display: 'adecuado'
    },
    {
      val: 2,
      display: 'inadecuado'
    }];
  accesorios = [
    {
      val: 1,
      display: 'ausentes'
    },
    {
      val: 2,
      display: 'escasos'
    },
    {
      val: 3,
      display: 'excesivos'
    },
    {
      val: 4,
      display: 'adecuados'
    },
    {
      val: 5,
      display: 'inadecuados'
    }];
  facies = [
    {
      val: 1,
      display: 'depresiva'
    },
    {
      val: 2,
      display: 'ansiosa'
    },
    {
      val: 3,
      display: 'inexpresiva'
    },
    {
      val: 4,
      display: 'neurológica'
    }];

  constructor(private authServ: AuthService,
              private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private patientServ: PatientService) { }

  ngOnInit() {
    this.patientServ.patientId.subscribe(res => {
      this.patientId = this.patientServ.patientId.getValue();
    });
    console.log(this.patientId);
    this.createForm();
  }
  createForm() {
    this.consultForm = this.fb.group({
      id: ['', Validators.required],
      consultMotive: ['', Validators.required],
      consultSymptoms: ['', Validators.required],
      consultCondition: ['', Validators.required],
      consultBeginning: ['', Validators.required],
      consultManner: ['', Validators.required],
      consultCharacteristics: ['', Validators.required],
      consultUnchained: ['', Validators.required],
      consultCoincidence: ['', Validators.required],
      consultConsequences: ['', Validators.required],
      consultEvolution: ['', Validators.required],
    });
    this.multiaxisForm = this.fb.group({
      id: ['', Validators.required],
      axisOne: ['', Validators.required],
      axisTwo: ['', Validators.required],
      axisThree: ['', Validators.required],
      axisFour: ['', Validators.required],
    });
    this.pathologicalForm = this.fb.group({
      id: ['', Validators.required],
      illnesses: ['', Validators.required],
      brain: ['', Validators.required],
      knowledgeDate: ['', Validators.required],
      knowledgeDesc: ['', Validators.required],
      seizures: ['', Validators.required],
      seizuresDesc: ['', Validators.required],
      substance: ['', Validators.required],
      accidents: ['', Validators.required],
      surgeries: ['', Validators.required],
    });
    this.nonPathologicalForm = this.fb.group({
      id: ['', Validators.required],
      nourishment: ['', Validators.required],
      family: ['', Validators.required],
      social: ['', Validators.required],
      mood: ['', Validators.required],
      stress: ['', Validators.required],
      hygiene: ['', Validators.required],
      life: ['', Validators.required],
      sleeping: ['', Validators.required],
      time: ['', Validators.required],
    });
    this.familyForm = this.fb.group({
      id: ['', Validators.required],
      disorder: ['', Validators.required],
      disorderRelation: ['', Validators.required],
      chronic: ['', Validators.required],
      chronicRelation: ['', Validators.required],
    });
    this.treatmentsForm = this.fb.group({
      id: ['', Validators.required],
      prenscriptions: ['', Validators.required],
      reaction: ['', Validators.required],
      selfmedication: ['', Validators.required],
    });
    this.evolutionForm = this.fb.group({
      id: ['', Validators.required],
      date: ['', Validators.required],
      bitacora: ['', Validators.required],
    });
    this.mentalForm = this.fb.group({
      id: ['', Validators.required],
      appearance: ['', Validators.required],
      dispotition: ['', Validators.required],
      motor: ['', Validators.required],
      motion: ['', Validators.required],
      greeting: ['', Validators.required],
      visualContact: ['', Validators.required],
      dress: ['', Validators.required],
      dressDesc: ['', Validators.required],
      accessories: ['', Validators.required],
      facies: ['', Validators.required],
      language: ['', Validators.required],
      orientation: ['', Validators.required],
      senperceptual: ['', Validators.required],
      coordination: ['', Validators.required],
    });
    this.developmentForm = this.fb.group({
      id: ['', Validators.required],
      pregnancy: ['', Validators.required],
      childbirth: ['', Validators.required],
      work: ['', Validators.required],
    });
    this.eventForm = this.fb.group({
      id: ['', Validators.required],
      developmentId: ['', Validators.required],
      significativeEvent: ['', Validators.required],
      eventDescription: ['', Validators.required],
    });
    this.familyDynamicForm = this.fb.group({
      id: ['', Validators.required],
      familyDesc: ['', Validators.required],
    });
  }


  onSubmit(value) {
    // TODO: Toastr response through auth serv
    this.authServ.createAdminUser(value).then(res => {
    });
  }
}

