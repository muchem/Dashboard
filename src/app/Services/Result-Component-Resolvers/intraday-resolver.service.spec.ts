import { TestBed } from '@angular/core/testing';

import { IntradayResolverService } from './intraday-resolver.service';

describe('IntradayResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntradayResolverService = TestBed.get(IntradayResolverService);
    expect(service).toBeTruthy();
  });
});
