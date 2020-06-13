import { TestBed } from '@angular/core/testing';

import { CompanyNewsResolverService } from './company-news-resolver.service';

describe('CompanyNewsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyNewsResolverService = TestBed.get(CompanyNewsResolverService);
    expect(service).toBeTruthy();
  });
});
