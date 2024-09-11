import { Component, inject } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { ServicesForInvestorsService } from './services-for-investors.service'
import { CommonModule } from '@angular/common'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'

@Component({
  selector: 'bb-services-for-investors',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    SvgIconComponent,
  ],
  templateUrl: './services-for-investors.component.html',
  styleUrl: './services-for-investors.component.scss',
})
export class ServicesForInvestorsComponent {
  private router = inject(Router)
  private sfiService = inject(ServicesForInvestorsService)

  public investorServicesCards = this.sfiService.investorServicesCards

  public items = [
    { route: '/', label: 'Главная' },
    { label: 'Сервисы инвестору' },
  ]

  public handleInvestorServicesCardClick(path: string): void {
    this.router.navigate([path])
  }
}
