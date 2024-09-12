import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'
import {
  InMemoryScrollingFeature,
  InMemoryScrollingOptions,
  provideRouter,
  withInMemoryScrolling,
} from '@angular/router'
import { provideAnimations } from '@angular/platform-browser/animations'

import { routes } from './app.routes'
import { provideHttpClient } from '@angular/common/http'
import { ScrollManagerDirective } from '@core/directives/scroll-manager.directive'

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
}

const inMemoryScrollingFeature: InMemoryScrollingFeature =
  withInMemoryScrolling(scrollConfig)

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, inMemoryScrollingFeature),
    provideHttpClient(),
    {
      provide: ScrollManagerDirective,
      useClass: ScrollManagerDirective,
    },
    provideAnimations(),
  ],
}
