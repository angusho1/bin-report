import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Auth } from 'aws-amplify';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const authenticatedUser = await Auth.currentAuthenticatedUser();
      return true;
    } catch (e) {
      return false;
    }
  }
}
