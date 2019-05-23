import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OgsiteComponent } from './ogsite.component';

describe('OgsiteComponent', () => {
  let component: OgsiteComponent;
  let fixture: ComponentFixture<OgsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OgsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OgsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
