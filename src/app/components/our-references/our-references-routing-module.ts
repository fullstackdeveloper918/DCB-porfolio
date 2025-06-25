import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurReferences } from './our-references/our-references';

const routes: Routes = [
  {
    path: '',
    component : OurReferences
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurReferencesRoutingModule { }
