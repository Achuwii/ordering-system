import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated = false;
  private currentUserRole: string = '';

  login(username: string, password: string): void {
    // Implement authentication logic
    // Set isAuthenticated and currentUserRole based on authentication result
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
