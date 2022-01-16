import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-qr-url',
  templateUrl: './qr-url.component.html',
  styleUrls: ['./qr-url.component.scss']
})
export class QrUrlComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute) { }

  async ngOnInit() {
    try {
      await Auth.currentAuthenticatedUser();
      this.router.navigate(['config'], { relativeTo: this.route });
    } catch (e) {
      this.router.navigate(['report'], { relativeTo: this.route });
    }
  }

  report() {
    this.router.navigate(['report'], { relativeTo: this.route });
  }
}
