import { Routes } from '@angular/router'
import { MainComponent } from '@pages/main/main.component'
import { MainService } from '@pages/main/main.service'
import { NotFoundPageComponent } from '@pages/not-found-page/not-found-page.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  { path: 'main', providers: [MainService], component: MainComponent },
  {
    path: 'services-for-business',
    loadChildren: () =>
      import('./pages/services-for-business/services-for-business.module').then(
        (m) => m.ServicesForBusinessModule,
      ),
  },
  {
    path: 'services-for-investors',
    loadChildren: () =>
      import(
        './pages/services-for-investors/services-for-investors.module'
      ).then((m) => m.ServicesForInvestorsModule),
  },
  {
    path: 'market-participant',
    loadChildren: () =>
      import('./pages/market-participant/market-participant.module').then(
        (m) => m.MarketParticipantModule,
      ),
  },
  {
    path: 'projects-file',
    loadChildren: () =>
      import('./pages/projects-file/projects-file.module').then(
        (m) => m.ProjectsFileModule,
      ),
  },
  {
    path: 'publications',
    loadChildren: () =>
      import('./pages/publications/publications.module').then(
        (m) => m.PublicationsModule,
      ),
  },
  {
    path: 'potential-of-kuzbass',
    loadChildren: () =>
      import('./pages/potential-of-kuzbass/potential-of-kuzbass.module').then(
        (m) => m.PotentialOfKuzbassModule,
      ),
  },
  {
    path: 'services',
    loadChildren: () =>
      import('./pages/services/services.module').then((m) => m.ServicesModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./pages/contacts/contacts.module').then((m) => m.ContactsModule),
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./pages/privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule,
      ),
  },
  {
    path: 'history-of-success',
    loadChildren: () =>
      import('./pages/history-of-success/history-of-success.module').then(
        (m) => m.HistoryOfSuccessModule,
      ),
  },
  { path: '**', component: NotFoundPageComponent },
]
