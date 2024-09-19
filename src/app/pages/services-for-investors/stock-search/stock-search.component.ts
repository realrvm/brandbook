import { Component } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { SearchTemplateComponent } from '../search-template/search-template.component'
import { StockSearchCardComponent } from './stock-search-card/stock-search-card.component'

@Component({
  selector: 'bb-stock-search',
  standalone: true,
  imports: [
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    SearchTemplateComponent,
    StockSearchCardComponent,
  ],
  templateUrl: './stock-search.component.html',
  styleUrl: './stock-search.component.scss',
})
export class StockSearchComponent {
  // TODO: delete
  public array = Array.from({ length: 15 })

  public items = [
    { route: '/', label: 'Главная' },
    { route: '/services-for-investors', label: 'Сервисы инвестору' },
    { label: 'Поиск акций' },
  ]
}
