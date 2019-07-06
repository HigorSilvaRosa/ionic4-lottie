import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLottieComponent } from './ngx-lottie.component';

describe('NgxLottieComponent', () => {
  let component: NgxLottieComponent;
  let fixture: ComponentFixture<NgxLottieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLottieComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLottieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
