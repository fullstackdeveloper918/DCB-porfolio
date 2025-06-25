import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Interior } from './interior/interior';

const routes: Routes = [
  {
    path : '',
    component: Interior
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteriorRoutingModule { }
