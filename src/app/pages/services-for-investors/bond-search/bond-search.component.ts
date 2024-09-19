import { Component } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { SearchTemplateComponent } from '../search-template/search-template.component'
import { BondSearchCardComponent } from './bond-search-card/bond-search-card.component'

@Component({
  selector: 'bb-bond-search',
  standalone: true,
  imports: [
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    SearchTemplateComponent,
    BondSearchCardComponent,
  ],
  templateUrl: './bond-search.component.html',
  styleUrl: './bond-search.component.scss',
})
export class BondSearchComponent {
  // TODO: delete
  public array = Array.from({ length: 15 })

  public items = [
    { route: '/', label: 'Главная' },
    { route: '/services-for-investors', label: 'Сервисы инвестору' },
    { label: 'Поиск облигаций' },
  ]
}
