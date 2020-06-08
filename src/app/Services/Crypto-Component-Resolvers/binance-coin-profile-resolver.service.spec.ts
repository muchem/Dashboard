import { TestBed } from '@angular/core/testing';

import { BinanceCoinProfileResolverService } from './binance-coin-profile-resolver.service';

describe('BinanceCoinProfileResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BinanceCoinProfileResolverService = TestBed.get(BinanceCoinProfileResolverService);
    expect(service).toBeTruthy();
  });
});
