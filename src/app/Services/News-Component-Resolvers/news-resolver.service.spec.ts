import { TestBed } from '@angular/core/testing';

import { NewsResolverService } from './news-resolver.service';

describe('NewsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsResolverService = TestBed.get(NewsResolverService);
    expect(service).toBeTruthy();
  });
});
