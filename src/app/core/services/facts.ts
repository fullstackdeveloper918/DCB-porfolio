import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { apiRoutes } from '../../utils/api.routes';

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  constructor(private apiService : ApiService) { }

  getFactsData(){
  return this.apiService.get(apiRoutes.allFacts)
  }
}
