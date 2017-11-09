/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BidirectionalBindingComponent } from './bidirectional-binding.component';

describe('BidirectionalBindingComponent', () => {
  let component: BidirectionalBindingComponent;
  let fixture: ComponentFixture<BidirectionalBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidirectionalBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidirectionalBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
