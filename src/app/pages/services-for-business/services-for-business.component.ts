import { Component, inject } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { ServicesForBusinessService } from './services-for-business.service'
import { CommonModule } from '@angular/common'
import { IconButtonComponent } from '@core/shared/ui/buttons/icon-button/icon-button.component'
import { Router } from '@angular/router'

@Component({
  selector: 'bb-services-for-business',
  standalone: true,
  imports: [
    CommonModule,
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    IconButtonComponent,
  ],
  templateUrl: './services-for-business.component.html',
  styleUrl: './services-for-business.component.scss',
})
export class ServicesForBusinessComponent {
  private sbService = inject(ServicesForBusinessService)
  private router = inject(Router)

  public items = [
    { route: '/', label: 'Главная' },
    { label: 'Сервисы бизнесу' },
  ]

  public businessServices = this.sbService.businessServices

  public handleMoreDetails(path: string) {
    this.router.navigate([path])
  }
}
