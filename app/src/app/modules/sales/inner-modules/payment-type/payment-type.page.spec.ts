import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTypePage } from './payment-type.page';

describe('PaymentTypePage', () => {
  let component: PaymentTypePage;
  let fixture: ComponentFixture<PaymentTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentTypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
