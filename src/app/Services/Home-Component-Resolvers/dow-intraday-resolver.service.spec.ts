import { TestBed } from '@angular/core/testing';

import { DowIntradayResolverService } from './dow-intraday-resolver.service';

describe('DowIntradayResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DowIntradayResolverService = TestBed.get(DowIntradayResolverService);
    expect(service).toBeTruthy();
  });
});
