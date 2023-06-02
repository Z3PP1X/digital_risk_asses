import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoverSheetComponent } from './cover-sheet/cover-sheet.component';
import { HazardCategoryComponent } from './hazard-category/hazard-category.component';
import { HierarchyOfMeasuresComponent } from './hierarchy-of-measures/hierarchy-of-measures.component';
import { RiskAssessmentFormComponent } from './risk-assessment-form/risk-assessment-form.component';
import { RiskMatrixComponent } from './risk-matrix/risk-matrix.component';

const routes: Routes = [

  { path: 'cover-sheet', component: CoverSheetComponent},
  { path: 'hazard-category', component: HazardCategoryComponent},
  { path: 'hierarchy-of-measures', component: HierarchyOfMeasuresComponent},
  { path: 'risk-assessment-form', component: RiskAssessmentFormComponent},
  { path: 'cover-sheet', component: CoverSheetComponent},
  { path: 'risk-matrix', component: RiskMatrixComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
