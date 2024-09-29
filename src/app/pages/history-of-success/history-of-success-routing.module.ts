import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HistoryOfSuccessComponent } from './history-of-success.component'
import { HosCompanyComponent } from './hos-company/hos-company.component'
import { HistoryOfSuccessService } from './history-of-success.service'

const routes: Routes = [
  {
    path: '',
    providers: [HistoryOfSuccessService],
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: HistoryOfSuccessComponent },
      { path: 'hos-company/:id', component: HosCompanyComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryOfSuccessRoutingModule {}
