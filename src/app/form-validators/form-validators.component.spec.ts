/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormValidatorsComponent } from './form-validators.component';

describe('FormValidatorsComponent', () => {
  let component: FormValidatorsComponent;
  let fixture: ComponentFixture<FormValidatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
