import { TestBed } from '@angular/core/testing';

import { SaleWrapService } from './sale-wrap.service';

describe('SaleWrapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaleWrapService = TestBed.get(SaleWrapService);
    expect(service).toBeTruthy();
  });
});
