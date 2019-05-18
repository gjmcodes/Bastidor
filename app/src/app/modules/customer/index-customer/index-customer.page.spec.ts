import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCustomerPage } from './index-customer.page';

describe('IndexCustomerPage', () => {
  let component: IndexCustomerPage;
  let fixture: ComponentFixture<IndexCustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexCustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
