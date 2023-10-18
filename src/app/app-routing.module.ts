import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { PreguntasComponent } from './preguntas/preguntas.component';

const routes: Routes = [
  { path: 'asignaturaNav', component: AsignaturasComponent },
  { path: 'preguntaNav', component: PreguntasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
