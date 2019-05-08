import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleFinalizationPage } from './sale-finalization.page';

describe('SaleFinalizationPage', () => {
  let component: SaleFinalizationPage;
  let fixture: ComponentFixture<SaleFinalizationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleFinalizationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleFinalizationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
