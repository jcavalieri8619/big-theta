import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationSubjectComponent } from './equation-subject.component';

describe('EquationSubjectComponent', () => {
  let component: EquationSubjectComponent;
  let fixture: ComponentFixture<EquationSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquationSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
