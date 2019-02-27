import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesStepsPage } from './sales-steps.page';

describe('SalesStepsPage', () => {
  let component: SalesStepsPage;
  let fixture: ComponentFixture<SalesStepsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesStepsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesStepsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
