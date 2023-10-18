import { Component, OnInit } from '@angular/core';
import { IntzPregunta } from '../intz-pregunta';
import { PreguntasService } from '../serv-pregunta.service';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {
  preguntas: IntzPregunta[] = [];

  constructor(private preguntasService: PreguntasService) {
  }

  ngOnInit() {
    this.preguntasService.getPreguntas().subscribe(preguntas => {
      this.preguntas = preguntas;
    });
  }
}
