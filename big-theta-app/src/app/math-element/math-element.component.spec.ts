import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathElementComponent } from './math-element.component';

describe('MathElementComponent', () => {
  let component: MathElementComponent;
  let fixture: ComponentFixture<MathElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
