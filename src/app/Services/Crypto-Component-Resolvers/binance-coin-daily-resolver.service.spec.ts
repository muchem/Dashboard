import { TestBed } from '@angular/core/testing';

import { BinanceCoinDailyResolverService } from './binance-coin-daily-resolver.service';

describe('BinanceCoinDailyResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BinanceCoinDailyResolverService = TestBed.get(BinanceCoinDailyResolverService);
    expect(service).toBeTruthy();
  });
});
