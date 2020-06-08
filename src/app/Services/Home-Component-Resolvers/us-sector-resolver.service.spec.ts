import { TestBed } from '@angular/core/testing';

import { UsSectorResolverService } from './us-sector-resolver.service';

describe('UsSectorResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsSectorResolverService = TestBed.get(UsSectorResolverService);
    expect(service).toBeTruthy();
  });
});
