import { TestBed } from '@angular/core/testing';

import { PricingDataService } from './pricing-data.service';

describe('PricingDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PricingDataService = TestBed.get(PricingDataService);
    expect(service).toBeTruthy();
  });
});
