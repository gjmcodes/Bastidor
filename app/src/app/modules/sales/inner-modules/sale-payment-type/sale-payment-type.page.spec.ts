import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalePaymentTypePage } from './sale-payment-type.page';

describe('SalePaymentTypePage', () => {
  let component: SalePaymentTypePage;
  let fixture: ComponentFixture<SalePaymentTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePaymentTypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalePaymentTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
