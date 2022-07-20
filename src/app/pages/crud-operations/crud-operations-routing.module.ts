import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudOperationsComponent } from './components/crud-operations.component';

const routes: Routes = [
  {
    path: '',
    component: CrudOperationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudOperationsRoutingModule { }
