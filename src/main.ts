import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import awsconfig from './aws-exports';
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';


Amplify.configure(awsconfig);


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
