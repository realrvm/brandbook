import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ServicesForInvestorsComponent } from './services-for-investors.component'
import { TextbookComponent } from './textbook/textbook.component'
import { BondSearchComponent } from './bond-search/bond-search.component'
import { ActiveSearchComponent } from './active-search/active-search.component'
import { StockSearchComponent } from './stock-search/stock-search.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: ServicesForInvestorsComponent },
      { path: 'textbook', component: TextbookComponent },
      { path: 'bond-search', component: BondSearchComponent },
      { path: 'active-search', component: ActiveSearchComponent },
      { path: 'stock-search', component: StockSearchComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesForInvestorsRoutingModule {}
