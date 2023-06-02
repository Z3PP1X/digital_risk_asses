import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyOfMeasuresComponent } from './hierarchy-of-measures.component';

describe('HierarchyOfMeasuresComponent', () => {
  let component: HierarchyOfMeasuresComponent;
  let fixture: ComponentFixture<HierarchyOfMeasuresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HierarchyOfMeasuresComponent]
    });
    fixture = TestBed.createComponent(HierarchyOfMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
