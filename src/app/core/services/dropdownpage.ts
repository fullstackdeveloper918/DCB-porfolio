import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { Observable } from 'rxjs';
import { BeforeYouBuildContent } from '../interfaces/dropdown.interface';

@Injectable({
  providedIn: 'root'
})
export class Dropdownpage {

  constructor(private apiService : ApiService) { }

  getData(route: string): Observable<BeforeYouBuildContent>{
    return this.apiService.get<BeforeYouBuildContent>(route);
  }
}
