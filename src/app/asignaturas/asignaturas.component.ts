import { Component, OnInit } from '@angular/core';
import { AsignaturasService } from '../serv-asignatura.service'; 
import { IntzAsignatura } from '../intz-asignatura';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {
  asignaturas: IntzAsignatura[] = [];

  constructor(private asignaturasService: AsignaturasService) { }

  ngOnInit() {
    this.asignaturasService.getAsignaturas().subscribe(asignaturas => {
      this.asignaturas = asignaturas;
    });
  }
}