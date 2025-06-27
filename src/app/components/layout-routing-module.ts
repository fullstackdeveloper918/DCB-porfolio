import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout';
import { NewHero } from './new-hero/new-hero/new-hero';

const routes: Routes = [
  {
    path : 'newHome',
    component : NewHero
  },
  {
    path : '',
    // component : Layout,
    redirectTo : 'Home',
    pathMatch : 'full'
  },
    {
    path : 'Home',
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
    path : 'architects',
    component : Layout,
    loadChildren : () => import('../components/before-you-build/before-you-build-module').then((m)=> m.BeforeYouBuildModule)
  }, 
  {
    path : 'timing-to-consider',
      component : Layout,
      loadChildren : () => import('../components/before-you-build/before-you-build-module').then((m)=> m.BeforeYouBuildModule)
  },
  {
    path : 'expenses-to-consider',
      component : Layout,
      loadChildren : () => import('../components/before-you-build/before-you-build-module').then((m)=> m.BeforeYouBuildModule)
  },
  {
    path : 'housekeeping',
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
    path : 'interior',
    loadChildren : () => import('../components/interior/interior-module').then((m) => m.InteriorModule)
  }, 
  {
    path : 'facts',
    component : Layout,
    loadChildren : () => import('../components/facts/facts-module').then((m) => m.FactsModule)
  },
  {
    path : 'our-references',
    component : Layout,
    loadChildren : () => import('../components/our-references/our-references-module').then((m) => m.OurReferencesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
