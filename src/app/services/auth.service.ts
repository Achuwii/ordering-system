import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;
  private currentUserRole: string = '';

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
        this.authenticated = true;
        this.currentUserRole = 'admin';
        return true;
      } else if (username === 'user' && password === 'user') {
        this.authenticated = true;
        this.currentUserRole = 'user';
        return true;
      } else {
        this.authenticated = false;
        this.currentUserRole = '';
        return false;
      }
  }

  logout(): void {
    // Implement logout logic
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getUserRole(): string {
    return this.currentUserRole;
  }
}
