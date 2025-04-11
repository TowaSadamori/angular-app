import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { HelloComponent } from './app/hello/hello.component';

bootstrapApplication(HelloComponent, appConfig)
  .catch((err) => console.error(err));
