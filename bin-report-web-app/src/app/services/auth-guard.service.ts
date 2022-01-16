import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Auth } from 'aws-amplify';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const authenticatedUser = await Auth.currentAuthenticatedUser();
      console.log(authenticatedUser);
      return true;
    } catch (e) {
      console.log(e);
      this.router.navigate(['login']);
      return false;
    }
  }
}
