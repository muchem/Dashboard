import { TestBed } from '@angular/core/testing';

import { BitcoinProfileResolverService } from './bitcoin-profile-resolver.service';

describe('BitcoinProfileResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BitcoinProfileResolverService = TestBed.get(BitcoinProfileResolverService);
    expect(service).toBeTruthy();
  });
});
