import { Component, inject } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { AboutService } from './about.service'

@Component({
  selector: 'bb-about',
  standalone: true,
  imports: [
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    SvgIconComponent,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  private aboutService = inject(AboutService)
  public items = [{ route: '/', label: 'Главная' }, { label: 'О проекте' }]

  public aboutText = this.aboutService.aboutText
}
