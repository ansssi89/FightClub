import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NacComponent } from './nac.component';

describe('NacComponent', () => {
  let component: NacComponent;
  let fixture: ComponentFixture<NacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
