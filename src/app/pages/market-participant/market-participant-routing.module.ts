import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { MarketParticipantComponent } from './market-participant.component'

const routes: Routes = [{ path: '', component: MarketParticipantComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketParticipantRoutingModule {}
