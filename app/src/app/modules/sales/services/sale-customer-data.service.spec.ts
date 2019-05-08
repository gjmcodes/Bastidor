import { TestBed } from '@angular/core/testing';

import { SaleCustomerDataService } from './sale-customer-data.service';

describe('SaleCustomerDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaleCustomerDataService = TestBed.get(SaleCustomerDataService);
    expect(service).toBeTruthy();
  });
});
