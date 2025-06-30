import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { apiRoutes } from '../../utils/api.routes';
import { Observable } from 'rxjs';
import { HomeResponse, Project, ProjectResponse } from '../interfaces/home.interface';

@Injectable({
  providedIn: 'root'
})
export class Home {

  constructor(private apiService : ApiService) { }

  getHeroData(): Observable<HomeResponse>{
    return this.apiService.get<HomeResponse>(apiRoutes.Home)
  }

  // GET BEFORE AFTER CONTENT
  getBeforeAfterContent() : Observable<ProjectResponse>{
    return this.apiService.get<ProjectResponse>(apiRoutes.beforeAfter)
  }
}
