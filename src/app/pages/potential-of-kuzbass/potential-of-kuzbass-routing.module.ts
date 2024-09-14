import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PotentialOfKuzbassComponent } from './potential-of-kuzbass.component'
import { PotentialOfKuzbassService } from './potential-of-kuzbass.service'

const routes: Routes = [
  {
    path: '',
    providers: [PotentialOfKuzbassService],
    component: PotentialOfKuzbassComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PotentialOfKuzbassRoutingModule {}
