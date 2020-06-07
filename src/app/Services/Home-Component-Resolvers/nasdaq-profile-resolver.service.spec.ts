import { TestBed } from '@angular/core/testing';

import { NasdaqProfileResolverService } from './nasdaq-profile-resolver.service';

describe('NasdaqProfileResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasdaqProfileResolverService = TestBed.get(NasdaqProfileResolverService);
    expect(service).toBeTruthy();
  });
});
