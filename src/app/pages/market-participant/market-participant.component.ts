import { Component } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'

@Component({
  selector: 'bb-market-participant',
  standalone: true,
  imports: [WrapperComponent, BreadcrumbsComponent, PageTitleComponent],
  templateUrl: './market-participant.component.html',
  styleUrl: './market-participant.component.scss',
})
export class MarketParticipantComponent {
  public items = [
    { route: '/', label: 'Главная' },
    { label: 'Участники рынка' },
  ]
}
