import { Component } from '@angular/core'
import { MainSerivcesForBusinessComponent } from './main-serivces-for-business/main-serivces-for-business.component'
import { MainSerivcesForInvestorsComponent } from './main-serivces-for-investors/main-serivces-for-investors.component'
import { MainSerivcesComponent } from './main-serivces/main-serivces.component'
import { MainIntroComponent } from './main-intro/main-intro.component'
import { MainMarketParticipantComponent } from './main-market-participant/main-market-participant.component'
import { MainProjectsFileComponent } from './main-projects-file/main-projects-file.component'
import { MainPublicationsComponent } from './main-publications/main-publications.component'
import { MainPotentialOfKuzbassComponent } from './main-potential-of-kuzbass/main-potential-of-kuzbass.component'

@Component({
  selector: 'bb-main',
  standalone: true,
  imports: [
    MainSerivcesForBusinessComponent,
    MainSerivcesForInvestorsComponent,
    MainSerivcesComponent,
    MainIntroComponent,
    MainMarketParticipantComponent,
    MainProjectsFileComponent,
    MainPublicationsComponent,
    MainPotentialOfKuzbassComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
