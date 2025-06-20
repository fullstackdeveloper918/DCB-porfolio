import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Projects } from './projects/projects';
import { Project } from './project/project';

const routes: Routes = [
  {
    path : '',
    component : Projects
  },
  {
    path : ':id',
    component :Project
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
