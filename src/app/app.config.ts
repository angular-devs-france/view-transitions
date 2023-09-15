import { ApplicationConfig } from '@angular/core';
import {provideRouter, withComponentInputBinding, withInMemoryScrolling, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withViewTransitions(), withComponentInputBinding(), withInMemoryScrolling({
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })) ]
};
