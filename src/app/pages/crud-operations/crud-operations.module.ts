import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudOperationsRoutingModule } from './crud-operations-routing.module';
import { CrudOperationsComponent } from './components/crud-operations.component';
import { SharedModule } from 'src/app/_shared/shared.module';
import { AddEditDialogComponent } from './components/add-edit-dialog/add-edit-dialog.component';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';


@NgModule({
  declarations: [
    CrudOperationsComponent,
    AddEditDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    CrudOperationsRoutingModule,
    SharedModule
  ]
})
export class CrudOperationsModule { }
