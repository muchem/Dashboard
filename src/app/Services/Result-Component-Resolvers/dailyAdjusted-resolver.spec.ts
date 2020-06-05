import { TestBed } from '@angular/core/testing';

import { DailyAdjustedResolver } from './dailyAdjusted-resolver';

describe('ResultResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyAdjustedResolver = TestBed.get(DailyAdjustedResolver);
    expect(service).toBeTruthy();
  });
});
