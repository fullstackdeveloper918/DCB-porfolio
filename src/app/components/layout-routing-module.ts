import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hero } from './hero/hero';
import { NewHero } from './new-hero/new-hero';
import { AboutUs } from './about-us/about-us';

const routes: Routes = [
  {
    path : '',
    component : Hero
  },
  {
    path : 'newHero',
    component : NewHero
  },
  {
    path : 'about-dcb',
    component : AboutUs
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
