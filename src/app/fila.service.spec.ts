import { TestBed } from '@angular/core/testing';

import { FilaService } from './fila.service';

describe('FilaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilaService = TestBed.get(FilaService);
    expect(service).toBeTruthy();
  });
});
