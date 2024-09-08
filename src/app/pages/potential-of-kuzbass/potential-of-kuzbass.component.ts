import { Component } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'

@Component({
  selector: 'bb-potential-of-kuzbass',
  standalone: true,
  imports: [WrapperComponent, BreadcrumbsComponent, PageTitleComponent],
  templateUrl: './potential-of-kuzbass.component.html',
  styleUrl: './potential-of-kuzbass.component.scss',
})
export class PotentialOfKuzbassComponent {
  public items = [
    { route: '/', label: 'Главная' },
    { label: 'Потенциал Кузбасса' },
  ]
}
