import { TestBed } from '@angular/core/testing';

import { GoldIntradayResolverService } from './gold-intraday-resolver.service';

describe('GoldIntradayResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoldIntradayResolverService = TestBed.get(GoldIntradayResolverService);
    expect(service).toBeTruthy();
  });
});
