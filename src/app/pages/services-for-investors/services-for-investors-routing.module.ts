import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ServicesForInvestorsComponent } from './services-for-investors.component'

const routes: Routes = [{ path: '', component: ServicesForInvestorsComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesForInvestorsRoutingModule {}
