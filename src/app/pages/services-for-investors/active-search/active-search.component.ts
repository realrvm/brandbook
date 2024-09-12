import { Component } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { SearchTemplateComponent } from '../search-template/search-template.component'

@Component({
  selector: 'bb-active-search',
  standalone: true,
  imports: [
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    SearchTemplateComponent,
  ],
  templateUrl: './active-search.component.html',
  styleUrl: './active-search.component.scss',
})
export class ActiveSearchComponent {
  public items = [
    { route: '/', label: 'Главная' },
    { route: '/services-for-investors', label: 'Сервисы инвестору' },
    { label: 'Поиск цифровых финансовых активов' },
  ]
}
