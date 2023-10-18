import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IntzAsignatura } from './intz-asignatura';

@Injectable({
  providedIn: 'root',
})
export class AsignaturasService {
  private asignaturas: IntzAsignatura[] = [
    {
      nombre: 'DWS',
      siglas: 'DWS',
      profesor: 'RFG',
    },
    {
      nombre: 'DIW',
      siglas: 'DIW',
      profesor: 'RFG',
    },
    {
      nombre: 'DWEC',
      siglas: 'DWEC',
      profesor: 'JGF',
    },
    {
      nombre: 'Desarrollo Aplicaciones Web',
      siglas: 'DAW',
      profesor: 'JCA',
    },
    {
      nombre: 'Empresa e Iniciativa Emprendedora',
      siglas: 'EIE',
      profesor: 'JAL',
    },
    {
      nombre: 'Etica',
      siglas: 'ETI',
      profesor: 'PFP',
    },
    {
      nombre: 'Ingles',
      siglas: 'ING',
      profesor: 'PFP',
    }
  ];

  getAsignaturas(): Observable<IntzAsignatura[]> {
    return of(this.asignaturas);
  }
}
