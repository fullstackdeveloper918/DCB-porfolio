import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { apiRoutes } from '../../utils/api.routes';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private apiService : ApiService) { }

  getProjects(){
    return this.apiService.get(apiRoutes.Projects)
  }

  // GET PROJECT BY ID
  getProjectById(id: string | null) {
    return this.apiService.get(`${apiRoutes.Projects}/${id}`);
  }
}
