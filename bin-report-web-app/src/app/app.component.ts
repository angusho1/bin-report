import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public authButtonText: string;
  public loggedIn: boolean = false;

  constructor(private auth: AuthService,
              private router: Router) {}

  ngOnInit() {
    this.auth.state().subscribe(signedIn => {
      this.authButtonText = signedIn ? 'Log Out' : 'Log In';
      this.loggedIn = signedIn;
    });
  }

  onClickAuthButton() {
    if (this.loggedIn) {
      this.auth.signOut();
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  
}
