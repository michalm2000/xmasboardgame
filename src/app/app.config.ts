import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideState, provideStore } from '@ngrx/store';
import { gameStateReducer } from './store/gamestate.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideState({name: "gameState", reducer: gameStateReducer}),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    
]
};
