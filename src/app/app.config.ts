import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { dashboardReducer } from './store/reducers/dashboard.reducer';
import { provideEffects } from '@ngrx/effects';
import { DashboardEffects } from './store/effects/dashboard.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({ dashboard: dashboardReducer }),
    provideEffects([DashboardEffects]),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
  ],
};
