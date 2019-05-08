import { TestBed } from '@angular/core/testing';

import { SaleFinalizationService } from './sale-finalization.service';

describe('SaleFinalizationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SaleFinalizationService = TestBed.get(SaleFinalizationService);
    expect(service).toBeTruthy();
  });
});
