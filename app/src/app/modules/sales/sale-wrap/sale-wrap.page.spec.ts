import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleWrapPage } from './sale-wrap.page';

describe('SaleWrapPage', () => {
  let component: SaleWrapPage;
  let fixture: ComponentFixture<SaleWrapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleWrapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleWrapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
