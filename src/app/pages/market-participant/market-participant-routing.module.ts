import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ParticipantComponent } from './participant/participant.component'
import { MarketParticipantService } from './market-participant.service'
import { MarketParticipantComponent } from './market-participant.component'
import { ParticipantService } from './participant/participant.service'

const routes: Routes = [
  {
    path: '',
    providers: [MarketParticipantService, ParticipantService],
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MarketParticipantComponent },
      { path: 'company/:id', component: ParticipantComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketParticipantRoutingModule {}
