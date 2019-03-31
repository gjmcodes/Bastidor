import { TestBed } from '@angular/core/testing';

import { PaymentTypeDataService } from './payment-type-data.service';

describe('PaymentTypeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentTypeDataService = TestBed.get(PaymentTypeDataService);
    expect(service).toBeTruthy();
  });
});
