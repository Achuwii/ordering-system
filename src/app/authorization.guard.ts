import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const roles = route.data['roles'] as Array<string>;
    if (this.authService.isAuthenticated() && (!roles || roles.includes(this.authService.getUserRole()))) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
