import { TestBed } from '@angular/core/testing';

import { BitcoinDailyResolverService } from './bitcoin-daily-resolver.service';

describe('BitcoinDailyResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitcoinDailyResolverService = TestBed.get(BitcoinDailyResolverService);
    expect(service).toBeTruthy();
  });
});
