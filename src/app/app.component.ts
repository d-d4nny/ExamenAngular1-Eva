import { Component, OnInit } from '@angular/core';
import { IntzAsignatura } from './intz-asignatura';
import { AsignaturasService } from './serv-asignatura.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ejercicio Examen';
  asignaturas: IntzAsignatura[] = [];

  constructor(private asignaturasService: AsignaturasService) {}

  ngOnInit() {
    this.asignaturasService.getAsignaturas().subscribe(
      (asignaturas: IntzAsignatura[]) => {
        this.asignaturas = asignaturas;
      },
      (error) => {
        console.error('Error obteniendo asignaturas:', error);
      }
    );
  }
}
