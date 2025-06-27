import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurReferences } from './our-references/our-references';
import { SecretKey } from './secret-key/secret-key';

const routes: Routes = [
  {
   path : '',
   redirectTo : 'secret-key',
   pathMatch : 'full'
  },
  {
    path: '1',
    component : OurReferences
  },
  {
    path : 'secret-key',
    component : SecretKey
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurReferencesRoutingModule { }
