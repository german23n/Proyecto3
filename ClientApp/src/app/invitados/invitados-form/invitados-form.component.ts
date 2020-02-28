import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Iinvitado } from '../invitados';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import { InvitadosService } from '../invitados.service';


@Component({
  selector: 'app-invitados-form',
  templateUrl: './invitados-form.component.html',
  styleUrls: ['./invitados-form.component.css']
})
export class InvitadosFormComponent implements OnInit {


  constructor(private fb: FormBuilder,
    private InvitadosService: InvitadosService,
  private router :Router) { }

  formGroup: FormGroup;


  ngOnInit() {
    this.formGroup = this.fb.group({
      nombre: ""
    });
  }

  save() {
    let invitado: Iinvitado = Object.assign({}, this.formGroup.value);
    console.table(invitado);
    this.InvitadosService.createInvitado(invitado)
      .subscribe(invitado => this.onSaveSuccess(),
        error => console.error(error));

  }
  onSaveSuccess() {
    this.router.navigate(["/Invitados"]);
  }

 
 
}
