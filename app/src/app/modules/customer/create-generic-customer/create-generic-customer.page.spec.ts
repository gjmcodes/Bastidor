import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGenericCustomerPage } from './create-generic-customer.page';

describe('CreateGenericCustomerPage', () => {
  let component: CreateGenericCustomerPage;
  let fixture: ComponentFixture<CreateGenericCustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGenericCustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGenericCustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
