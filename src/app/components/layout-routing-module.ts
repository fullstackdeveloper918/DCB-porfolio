import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Layout } from './layout';
import { NewHero } from './new-hero/new-hero/new-hero';

const routes: Routes = [
  {
    path : '',
    component : NewHero,
        data: { title: 'HOME' }
  },
  // {
  //   path : '',
  //   // component : Layout,
  //   redirectTo : 'Home',
  //   pathMatch : 'full'
  // },
    {
    path : 'Home',
    component : Layout,
    loadChildren: () => import('../components/hero/hero-module').then((m) => m.HeroModule),
            data: { title: 'HOME' }

  },
  {
    path : 'about-dcb',
    component : Layout,
    loadChildren : () => import('../components/about-us//about-us-module').then((m)=> m.AboutUsModule),
    data: { title: 'About DCB' }
  },
  {
    path : 'projects',
    component : Layout,
    loadChildren : () => import('../components/projects/projects-module').then((m)=>m.ProjectsModule),
        data: { title: 'PROJECTS' }
  },
  {
    path : 'before-you-build',
    component : Layout,
    loadChildren : () => import('../components/before-you-build/before-you-build-module').then((m)=> m.BeforeYouBuildModule),
            data: { title: 'Before you build' }
  }, 
   {
    path : 'architects',
    component : Layout,
    loadChildren : () => import('../components/before-you-build/before-you-build-module').then((m)=> m.BeforeYouBuildModule),
                data: { title: 'Architects' }
  }, 
  {
    path : 'timing-to-consider',
      component : Layout,
      loadChildren : () => import('../components/before-you-build/before-you-build-module').then((m)=> m.BeforeYouBuildModule),
                      data: { title: 'Timing to consider' }
  },
  {
    path : 'expenses-to-consider',
      component : Layout,
      loadChildren : () => import('../components/before-you-build/before-you-build-module').then((m)=> m.BeforeYouBuildModule),
                            data: { title: 'expenses to consider' }
  },
  {
    path : 'housekeeping',
    component : Layout,
    loadChildren : () => import('../components/before-you-build/before-you-build-module').then((m)=> m.BeforeYouBuildModule),
                          data: { title: 'Housekeeping' }
  },
  {
    path : '20-clubs',
    component : Layout,
    loadChildren : () => import('../components/nahb/nahb-module').then((m)=>m.NahbModule),
                          data: { title: '20 Clubs' }
  },
  {
    path : 'contact-us',
    component : Layout,
    loadChildren : () => import('../components/contact-us/contact-us-module').then((m)=> m.ContactUsModule),
                          data: { title: 'CONTACT US' }
  },
  {
    path : 'facts',
    component : Layout,
    loadChildren : () => import('../components/facts/facts-module').then((m) => m.FactsModule),
                          data: { title: 'FACTS' }
  },
  {
    path : 'our-references',
    component : Layout,
    loadChildren : () => import('../components/our-references/our-references-module').then((m) => m.OurReferencesModule),
                          data: { title: 'Our References' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
