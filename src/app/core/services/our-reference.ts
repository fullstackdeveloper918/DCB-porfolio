import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { apiRoutes } from '../../utils/api.routes';

@Injectable({
  providedIn: 'root'
})
export class OurReference {

  constructor(private apiService : ApiService) { }

  getReferenceData(){
    return this.apiService.get(apiRoutes.ourReference)
  }

  // SECURE FORM
  secureForm(password:any){
    return this.apiService.get(`${apiRoutes.secureForm}?access_key=${password}`)
  }

   // get referece projects
   getReferenceProjects(){
    return this.apiService.get(apiRoutes.residential)
   }
}
