import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleFormPage } from './sale-form.page';

describe('SaleFormPage', () => {
  let component: SaleFormPage;
  let fixture: ComponentFixture<SaleFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
