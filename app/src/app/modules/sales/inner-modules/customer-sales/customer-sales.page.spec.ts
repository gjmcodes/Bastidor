import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSalesPage } from './customer-sales.page';

describe('CustomerSalesPage', () => {
  let component: CustomerSalesPage;
  let fixture: ComponentFixture<CustomerSalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
