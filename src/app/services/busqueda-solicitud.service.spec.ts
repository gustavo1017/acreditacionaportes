import { TestBed } from '@angular/core/testing';

import { BusquedaSolicitudService } from './busqueda-solicitud.service';

describe('BusquedaSolicitudService', () => {
  let service: BusquedaSolicitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedaSolicitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
