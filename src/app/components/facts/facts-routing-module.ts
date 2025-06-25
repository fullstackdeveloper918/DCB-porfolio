import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Facts } from './facts/facts';

const routes: Routes = [
  {
    path: '',
    component:Facts
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactsRoutingModule { }
