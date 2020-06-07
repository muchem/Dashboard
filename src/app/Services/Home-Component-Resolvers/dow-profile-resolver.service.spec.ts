import { TestBed } from '@angular/core/testing';

import { DowProfileResolverService } from './dow-profile-resolver.service';

describe('DowProfileResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DowProfileResolverService = TestBed.get(DowProfileResolverService);
    expect(service).toBeTruthy();
  });
});
