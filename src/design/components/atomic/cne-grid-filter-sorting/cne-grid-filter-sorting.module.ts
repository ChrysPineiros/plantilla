import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CneGridFilterSortingComponent } from './cne-grid-filter-sorting.component';
import { DxButtonModule, DxDataGridModule, DxTemplateModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    CneGridFilterSortingComponent
  ],
  imports: [
    CommonModule,
    DxTemplateModule,
    DxDataGridModule,
    DxButtonModule
  ]
})
export class CneGridFilterSortingModule { }
