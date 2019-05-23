import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppfeedbackComponent } from './appfeedback.component';

describe('AppfeedbackComponent', () => {
  let component: AppfeedbackComponent;
  let fixture: ComponentFixture<AppfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
