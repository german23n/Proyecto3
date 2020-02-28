import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InvitadosService } from './invitados.service';
import { Iinvitado } from './invitados';

@Component({
  selector: 'app-invitados',
  templateUrl: './invitados.component.html',
  styleUrls: ['./invitados.component.css']
})
export class InvitadosComponent implements OnInit {

  constructor(private InvitadosService: InvitadosService) { }

  Invitados: Iinvitado[];

 

  ngOnInit() {
    this.InvitadosService.getInvitados()
      .subscribe(InvitadosDesdeWS => this.Invitados = InvitadosDesdeWS,
    error => console.error(error));
    }
   
}


