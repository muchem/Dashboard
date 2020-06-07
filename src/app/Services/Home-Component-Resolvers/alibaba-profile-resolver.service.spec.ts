import { TestBed } from '@angular/core/testing';

import { AlibabaProfileResolverService } from './alibaba-profile-resolver.service';

describe('AlibabaProfileResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlibabaProfileResolverService = TestBed.get(AlibabaProfileResolverService);
    expect(service).toBeTruthy();
  });
});
