import { Component, inject } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { PrivacyPolicyTsService } from './privacy-policy.service'

@Component({
  selector: 'bb-privacy-policy',
  standalone: true,
  imports: [WrapperComponent, PageTitleComponent, BreadcrumbsComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  private privacyPolicyService = inject(PrivacyPolicyTsService)
  public items = [
    { route: '/', label: 'Главная' },
    { label: 'Политика конфиденциальности' },
  ]

  public privacyPolicy = this.privacyPolicyService.privacyPolicy
}
