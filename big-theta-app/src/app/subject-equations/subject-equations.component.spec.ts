import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEquationsComponent } from './subject-equations.component';

describe('SubjectEquationsComponent', () => {
  let component: SubjectEquationsComponent;
  let fixture: ComponentFixture<SubjectEquationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectEquationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectEquationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
