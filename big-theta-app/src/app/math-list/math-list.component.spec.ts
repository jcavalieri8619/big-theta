import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathListComponent } from './math-list.component';

describe('MathListComponent', () => {
  let component: MathListComponent;
  let fixture: ComponentFixture<MathListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
