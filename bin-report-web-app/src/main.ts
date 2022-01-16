import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import Amplify, { Auth } from 'aws-amplify';
// @ts-ignore
import awsconfig from './aws-exports';

if (environment.production) {
  enableProdMode();
}

const [signInRedirect, localRedirect] = awsconfig.oauth.redirectSignIn.split(",");

const [signOutRedirect, localSignOutRedirect] = awsconfig.oauth.redirectSignOut.split(",");

Amplify.configure({
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    redirectSignIn: environment.production ? signInRedirect : localRedirect,
    redirectSignOut: environment.production ? signOutRedirect : localSignOutRedirect,
  }
});

Amplify.configure({
  API: {
    graphql_headers: async () => {
      try {
        const token = (await Auth.currentSession()).getIdToken().getJwtToken();
        return { Authorization: token }
      }
      catch (e) {
        console.error(e);
        return {};
      }
    }
  }
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
