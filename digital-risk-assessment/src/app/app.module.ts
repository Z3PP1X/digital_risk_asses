import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';



import { RiskAssessmentFormComponent } from './risk-assessment-form/risk-assessment-form.component';
import { DeckblattComponent } from './deckblatt/deckblatt.component';
import { CoverSheetComponent } from './cover-sheet/cover-sheet.component';
import { RiskMatrixComponent } from './risk-matrix/risk-matrix.component';
import { HazardCategoryComponent } from './hazard-category/hazard-category.component';
import { HierarchyOfMeasuresComponent } from './hierarchy-of-measures/hierarchy-of-measures.component'; 

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    RiskAssessmentFormComponent,
    DeckblattComponent,
    CoverSheetComponent,
    RiskMatrixComponent,
    HazardCategoryComponent,
    HierarchyOfMeasuresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
