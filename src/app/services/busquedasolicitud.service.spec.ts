import { TestBed } from '@angular/core/testing';

import { BusquedasolicitudService } from './busquedasolicitud.service';

describe('BusquedasolicitudService', () => {
  let service: BusquedasolicitudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusquedasolicitudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
