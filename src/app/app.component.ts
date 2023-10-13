import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root, .pancakes[sauce=banana]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'jbi';
  isOpen = false;
  loggedIn = false;

  constructor(private oauth: OAuthService) {
    oauth.configure(environment.authConfig);
    oauth.events.subscribe(console.log);
  }

  ngOnInit(): void {
    this.oauth.tryLogin().then((loggedin) => (this.loggedIn = loggedin));
  }

  login() {
    this.oauth.initLoginFlow();
  }
}
