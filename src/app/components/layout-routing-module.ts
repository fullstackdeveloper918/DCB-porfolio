import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { NewHero } from './new-hero/new-hero';

const routes: Routes = [
  // {
  //   path : '',
  //   component : Hero
  // },
  {
    path : '',
    component : NewHero
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
