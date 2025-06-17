import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Nahb } from './nahb/nahb';

const routes: Routes = [
  {
    path : '',
    component : Nahb
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NahbRoutingModule { }
