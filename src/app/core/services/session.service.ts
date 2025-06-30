import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  isSessionActive(): boolean {
    const session = localStorage.getItem('secureSession');
    if (!session) return false;

    const { expires } = JSON.parse(session);
    return new Date().getTime() < expires;
  }

  clearSession(): void {
    localStorage.removeItem('secureSession');
  }
}
