import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Component, inject } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { PotentialOfKuzbassService } from './potential-of-kuzbass.service'

@Component({
  selector: 'bb-potential-of-kuzbass',
  standalone: true,
  imports: [
    CommonModule,
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    NgOptimizedImage,
  ],
  templateUrl: './potential-of-kuzbass.component.html',
  styleUrl: './potential-of-kuzbass.component.scss',
})
export class PotentialOfKuzbassComponent {
  private pokService = inject(PotentialOfKuzbassService)

  public regionAdvantages = this.pokService.regionAdvantages

  public items = [
    { route: '/', label: 'Главная' },
    { label: 'Потенциал Кузбасса' },
  ]
}
