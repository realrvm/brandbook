import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ServicesForBusinessComponent } from './services-for-business.component'
import { ServicesForBusinessService } from './services-for-business.service'

const routes: Routes = [
  {
    path: '',
    providers: [ServicesForBusinessService],
    component: ServicesForBusinessComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesForBusinessRoutingModule {}
