import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, Hub } from 'aws-amplify';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signedIn: Subject<boolean> = new Subject();

  constructor(private router: Router) {
    this.getAuth();
  }

  async getAuth() {
    try {
      const authenticatedUser = await Auth.currentAuthenticatedUser();
      this.signedIn.next(true);
    } catch (e) {
      this.signedIn.next(false);
    }
  }

  state() {
    return this.signedIn.asObservable();
  }

  signOut() {
    Auth.signOut();
    this.signedIn.next(false);
  }
}
