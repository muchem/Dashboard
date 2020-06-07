import { TestBed } from '@angular/core/testing';

import { NasdaqIntradayResolverService } from './nasdaq-intraday-resolver.service';

describe('NasdaqIntradayResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasdaqIntradayResolverService = TestBed.get(NasdaqIntradayResolverService);
    expect(service).toBeTruthy();
  });
});
