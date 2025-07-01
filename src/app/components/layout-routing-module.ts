import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout';
import { AboutUs } from './about-us/about-us/about-us';
import { NewHero } from './new-hero/new-hero/new-hero';

const routes: Routes = [
  {
    path : 'newHero',
    component : NewHero
  },
  // {
  //   path : '',
  //   // component : Layout,
  //   redirectTo : 'Hero',
  //   pathMatch : 'full'
  // },
    {
    path : '',
    component : Layout,
    loadChildren: () => import('../components/hero/hero-module').then((m) => m.HeroModule)
  },
  {
    path : 'about-dcb',
    component : Layout,
    loadChildren : () => import('../components/about-us//about-us-module').then((m)=> m.AboutUsModule)
  },
  {
    path : 'projects',
    component : Layout,
    loadChildren : () => import('../components/projects/projects-module').then((m)=>m.ProjectsModule)
  },
  {
    path : 'before-you-build',
    component : Layout,
    loadChildren : () => import('../components/before-you-build/before-you-build-module').then((m)=> m.BeforeYouBuildModule)
  }, 
  {
    path : '20-clubs',
    component : Layout,
    loadChildren : () => import('../components/nahb/nahb-module').then((m)=>m.NahbModule)
  },
  {
    path : 'contact-us',
    component : Layout,
    loadChildren : () => import('../components/contact-us/contact-us-module').then((m)=> m.ContactUsModule)
  },
  {
    path : 'client-login',
    component : Layout,
    loadChildren : () => import('../components/login/login-module').then((m) => m.LoginModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
