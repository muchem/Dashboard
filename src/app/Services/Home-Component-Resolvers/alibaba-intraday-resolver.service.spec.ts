import { TestBed } from '@angular/core/testing';

import { AlibabaIntradayResolverService } from './alibaba-intraday-resolver.service';

describe('AlibabaIntradayResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlibabaIntradayResolverService = TestBed.get(AlibabaIntradayResolverService);
    expect(service).toBeTruthy();
  });
});
