import { TestBed } from '@angular/core/testing';

import { EthereumDailyResolverService } from './ethereum-daily-resolver.service';

describe('EthereumDailyResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EthereumDailyResolverService = TestBed.get(EthereumDailyResolverService);
    expect(service).toBeTruthy();
  });
});
