import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { apiRoutes } from '../../utils/api.routes';

@Injectable({
  providedIn: 'root'
})
export class About {

  constructor(private apiService : ApiService) { }

  getAboutData(){
    return this.apiService.get(apiRoutes.About)
  }
}
