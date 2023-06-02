import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardCategoryComponent } from './hazard-category.component';

describe('HazardCategoryComponent', () => {
  let component: HazardCategoryComponent;
  let fixture: ComponentFixture<HazardCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HazardCategoryComponent]
    });
    fixture = TestBed.createComponent(HazardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
