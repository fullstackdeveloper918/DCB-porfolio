import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hero } from './hero/hero';

const routes: Routes = [
  {
    path : '',
    component : Hero
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
