import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // Replace with real authentication logic
    if (username === 'admin' && password === 'password') {
      this.isAuthenticated = true;
      this.router.navigate(['/contacts']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.router.navigate(['/']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
