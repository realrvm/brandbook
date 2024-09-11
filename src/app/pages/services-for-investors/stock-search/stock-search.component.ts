import { Component } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'

@Component({
  selector: 'bb-stock-search',
  standalone: true,
  imports: [WrapperComponent, BreadcrumbsComponent, PageTitleComponent],
  templateUrl: './stock-search.component.html',
  styleUrl: './stock-search.component.scss',
})
export class StockSearchComponent {
  public items = [
    { route: '/', label: 'Главная' },
    { route: '/services-for-investors', label: 'Сервисы инвестору' },
    { label: 'Поиск акций' },
  ]
}
