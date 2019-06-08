import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { ListComponent } from '../table-pages/list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    TableRoutingModule
  ]
})
export class TableModule { }
