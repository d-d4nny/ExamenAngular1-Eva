import { TestBed } from '@angular/core/testing';

import { PreguntasService } from './serv-pregunta.service';

describe('ServPreguntaService', () => {
  let service: PreguntasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreguntasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
