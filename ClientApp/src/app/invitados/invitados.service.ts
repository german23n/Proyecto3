import { Injectable , Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Iinvitado } from './invitados';

@Injectable()
export class InvitadosService {

  private apiURL = this.baseUrl + "api/Invitados";

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

    getInvitados(): Observable<Iinvitado[]> {
      return this.http.get<Iinvitado[]>(this.apiURL);

  }

  createInvitado(invitado: Iinvitado): Observable<Iinvitado> {
  return this.http.post<Iinvitado>(this.apiURL, invitado); 
  }  
} 


