import { TestBed } from '@angular/core/testing';

import { EthereumProfileResolverService } from './ethereum-profile-resolver.service';

describe('EthereumProfileResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EthereumProfileResolverService = TestBed.get(EthereumProfileResolverService);
    expect(service).toBeTruthy();
  });
});
