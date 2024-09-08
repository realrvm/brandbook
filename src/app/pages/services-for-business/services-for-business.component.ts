import { Component } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'

@Component({
  selector: 'bb-services-for-business',
  standalone: true,
  imports: [WrapperComponent, BreadcrumbsComponent, PageTitleComponent],
  templateUrl: './services-for-business.component.html',
  styleUrl: './services-for-business.component.scss',
})
export class ServicesForBusinessComponent {
  public items = [
    { route: '/', label: 'Главная' },
    { label: 'Сервисы бизнесу' },
  ]
}
