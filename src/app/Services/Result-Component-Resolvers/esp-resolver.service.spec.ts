import { TestBed } from '@angular/core/testing';

import { EspResolverService } from './esp-resolver.service';

describe('EspResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspResolverService = TestBed.get(EspResolverService);
    expect(service).toBeTruthy();
  });
});
