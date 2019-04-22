import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGenericPage } from './create-generic.page';

describe('CreateGenericPage', () => {
  let component: CreateGenericPage;
  let fixture: ComponentFixture<CreateGenericPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGenericPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGenericPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
