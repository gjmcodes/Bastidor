import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockIndexPage } from './stock-index.page';

describe('StockIndexPage', () => {
  let component: StockIndexPage;
  let fixture: ComponentFixture<StockIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockIndexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
