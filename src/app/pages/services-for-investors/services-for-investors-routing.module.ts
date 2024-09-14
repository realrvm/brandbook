import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ServicesForInvestorsComponent } from './services-for-investors.component'
import { TextbooksService } from './textbooks/textbooks.service'
import { ServicesForInvestorsService } from './services-for-investors.service'

const routes: Routes = [
  {
    path: '',
    providers: [TextbooksService, ServicesForInvestorsService],
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: ServicesForInvestorsComponent },
      {
        path: 'bond-search',
        loadComponent: () =>
          import('./bond-search/bond-search.component').then(
            (m) => m.BondSearchComponent,
          ),
      },
      {
        path: 'active-search',
        loadComponent: () =>
          import('./active-search/active-search.component').then(
            (m) => m.ActiveSearchComponent,
          ),
      },
      {
        path: 'stock-search',
        loadComponent: () =>
          import('./stock-search/stock-search.component').then(
            (m) => m.StockSearchComponent,
          ),
      },
      {
        path: 'textbooks',
        loadComponent: () =>
          import('./textbooks/textbooks.component').then(
            (m) => m.TextbooksComponent,
          ),
      },
      {
        path: 'textbooks/:id',
        loadComponent: () =>
          import('./textbooks/textbook/textbook.component').then(
            (m) => m.TextbookComponent,
          ),
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesForInvestorsRoutingModule {}
