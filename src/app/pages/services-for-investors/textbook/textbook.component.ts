import { Component } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'

@Component({
  selector: 'bb-textbook',
  standalone: true,
  imports: [WrapperComponent, BreadcrumbsComponent, PageTitleComponent],
  templateUrl: './textbook.component.html',
  styleUrl: './textbook.component.scss',
})
export class TextbookComponent {
  public items = [
    { route: '/', label: 'Главная' },
    { route: '/services-for-investors', label: 'Сервисы инвестору' },
    { label: 'Учебник' },
  ]
}
