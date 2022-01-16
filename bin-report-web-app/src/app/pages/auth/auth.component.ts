import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

  async ngOnInit() {
    try {
      await Auth.currentAuthenticatedUser();
      this.router.navigateByUrl('/');
    } catch (e) {

    }
  }

}
