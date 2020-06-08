import { TestBed } from '@angular/core/testing';

import { EconomicCalenderResolverService } from './economic-calender-resolver.service';

describe('EconomicCalenderResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EconomicCalenderResolverService = TestBed.get(EconomicCalenderResolverService);
    expect(service).toBeTruthy();
  });
});
