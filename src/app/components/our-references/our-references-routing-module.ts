import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurReferences } from './our-references/our-references';
import { SecretKey } from './secret-key/secret-key';
import { OurReference1 } from './our-reference-1/our-reference-1';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
   path : '',
   redirectTo : '1',
   pathMatch : 'full'
  },
  {
    path: '1',
    component : OurReferences,
    // canActivate : [AuthGuard]
  },
  // {
  //   path : 'secret-key',
  //   component : SecretKey
  // }, 
  {
    path : '2', 
    component : OurReference1
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurReferencesRoutingModule { }
