import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquationRankComponent } from './equation-rank.component';

describe('EquationRankComponent', () => {
  let component: EquationRankComponent;
  let fixture: ComponentFixture<EquationRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquationRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquationRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
