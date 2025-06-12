import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeforeYouBuild } from './before-you-build/before-you-build';

const routes: Routes = [
  {
    path : '',
    component : BeforeYouBuild
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeforeYouBuildRoutingModule { }
