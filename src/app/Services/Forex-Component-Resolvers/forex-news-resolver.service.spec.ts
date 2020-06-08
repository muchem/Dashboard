import { TestBed } from '@angular/core/testing';

import { ForexNewsResolverService } from './forex-news-resolver.service';

describe('ForexNewsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForexNewsResolverService = TestBed.get(ForexNewsResolverService);
    expect(service).toBeTruthy();
  });
});
