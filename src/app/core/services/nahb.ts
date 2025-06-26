import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { Observable } from 'rxjs';
import { Builder20ClubData } from '../interfaces/nahb.interface';

@Injectable({
  providedIn: 'root'
})
export class NahbService {

  constructor(private apiService : ApiService) { }

  getData() : Observable<Builder20ClubData> {
    return this.apiService.get<Builder20ClubData>('20-club');
  }
}
