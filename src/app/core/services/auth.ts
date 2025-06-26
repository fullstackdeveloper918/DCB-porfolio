import { Injectable } from '@angular/core';
import { ApiService } from './api/api.service';
import { apiRoutes } from '../../utils/api.routes';
import { Observable } from 'rxjs';
import { ContactInfo } from '../interfaces/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  constructor(private apiService : ApiService) { }

  getContactUsData() : Observable<ContactInfo> {
    return this.apiService.get<ContactInfo>(apiRoutes.contactForm);
  }
}
