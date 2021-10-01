import { TestBed } from '@angular/core/testing';

import { LDALScriptService } from './ldal-script.service';

describe('LDALScriptService', () => {
  let service: LDALScriptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LDALScriptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
