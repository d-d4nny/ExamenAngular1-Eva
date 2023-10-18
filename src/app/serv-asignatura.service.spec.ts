import { TestBed } from '@angular/core/testing';

import { AsignaturasService } from './serv-asignatura.service';

describe('ServAsignaturaService', () => {
  let service: AsignaturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsignaturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
