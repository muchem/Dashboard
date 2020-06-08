import { TestBed } from '@angular/core/testing';

import { LitecoinProfileResolverService } from './litecoin-profile-resolver.service';

describe('LitecoinProfileResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LitecoinProfileResolverService = TestBed.get(LitecoinProfileResolverService);
    expect(service).toBeTruthy();
  });
});
