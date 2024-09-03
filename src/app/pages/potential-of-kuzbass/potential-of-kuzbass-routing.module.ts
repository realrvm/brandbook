import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PotentialOfKuzbassComponent } from './potential-of-kuzbass.component'

const routes: Routes = [{ path: '', component: PotentialOfKuzbassComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PotentialOfKuzbassRoutingModule {}
