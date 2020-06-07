import { TestBed } from '@angular/core/testing';

import { GoldProfileResolverService } from './gold-profile-resolver.service';

describe('GoldProfileResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoldProfileResolverService = TestBed.get(GoldProfileResolverService);
    expect(service).toBeTruthy();
  });
});
