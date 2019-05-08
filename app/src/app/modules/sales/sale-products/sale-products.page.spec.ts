import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleProductsPage } from './sale-products.page';

describe('SaleProductsPage', () => {
  let component: SaleProductsPage;
  let fixture: ComponentFixture<SaleProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleProductsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
