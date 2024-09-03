import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ServicesForBusinessComponent } from './services-for-business.component'

const routes: Routes = [
  {
    path: '',
    component: ServicesForBusinessComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesForBusinessRoutingModule {}
