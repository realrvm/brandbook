import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ServicesForInvestorsComponent } from './services-for-investors.component'
import { BondSearchComponent } from './bond-search/bond-search.component'
import { ActiveSearchComponent } from './active-search/active-search.component'
import { StockSearchComponent } from './stock-search/stock-search.component'
import { TextbooksComponent } from './textbooks/textbooks.component'
import { TextbookComponent } from './textbooks/textbook/textbook.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: ServicesForInvestorsComponent },
      { path: 'bond-search', component: BondSearchComponent },
      { path: 'active-search', component: ActiveSearchComponent },
      { path: 'stock-search', component: StockSearchComponent },
      { path: 'textbooks', component: TextbooksComponent },
      { path: 'textbooks/:id', component: TextbookComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesForInvestorsRoutingModule {}
