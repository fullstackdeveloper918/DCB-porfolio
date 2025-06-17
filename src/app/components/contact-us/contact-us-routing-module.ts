import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUs } from './contact-us/contact-us';

const routes: Routes = [
  {
    path : '', 
    component : ContactUs
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
