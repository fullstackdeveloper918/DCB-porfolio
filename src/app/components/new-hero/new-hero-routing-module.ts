import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewHero } from './new-hero/new-hero';

const routes: Routes = [
  {
    path : '',
    component : NewHero
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewHeroRoutingModule { }
