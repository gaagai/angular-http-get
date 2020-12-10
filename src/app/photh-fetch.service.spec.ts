import { TestBed } from '@angular/core/testing';

import { PhothFetchService } from './photh-fetch.service';

describe('PhothFetchService', () => {
  let service: PhothFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhothFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
