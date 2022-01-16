import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Auth } from 'aws-amplify';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Hub } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    try {
      const authenticatedUser = await Auth.currentAuthenticatedUser();
      return true;
    } catch (e) {
      console.log(e);
      if (!route.url.toString().includes('bins')) {
        this.router.navigate(['login']);
      }
      return false;
    }
  }
}
