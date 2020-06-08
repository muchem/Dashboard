import { TestBed } from '@angular/core/testing';

import { LitecoinDailyResolverService } from './litecoin-daily-resolver.service';

describe('LitecoinDailyResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LitecoinDailyResolverService = TestBed.get(LitecoinDailyResolverService);
    expect(service).toBeTruthy();
  });
});
