import { TestBed } from '@angular/core/testing';

import { CunstomJsonService } from './cunstom-json.service';

describe('CunstomJsonService', () => {
  let service: CunstomJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CunstomJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
