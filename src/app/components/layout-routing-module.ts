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
  {
    path : '',
    // component : Layout,
    redirectTo : 'Hero',
    pathMatch : 'full'
  },
    {
    path : 'Hero',
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
