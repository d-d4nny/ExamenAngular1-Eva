import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  template: `
    <div class="cabecera">
      <h1>{{ tituloEjercicio }}</h1>
      <p>Alumno: {{ nombreAlumno }}</p>
    </div>
  `,
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent {
  tituloEjercicio = 'Ejercicio Examen';
  nombreAlumno = 'Daniel Gonzalez Manzano';
}