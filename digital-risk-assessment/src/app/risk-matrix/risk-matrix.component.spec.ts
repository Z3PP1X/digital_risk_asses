import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskMatrixComponent } from './risk-matrix.component';

describe('RiskMatrixComponent', () => {
  let component: RiskMatrixComponent;
  let fixture: ComponentFixture<RiskMatrixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskMatrixComponent]
    });
    fixture = TestBed.createComponent(RiskMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
