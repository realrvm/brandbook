import { Component } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'

@Component({
  selector: 'bb-projects-file',
  standalone: true,
  imports: [WrapperComponent, BreadcrumbsComponent, PageTitleComponent],
  templateUrl: './projects-file.component.html',
  styleUrl: './projects-file.component.scss',
})
export class ProjectsFileComponent {
  public items = [
    { route: '/', label: 'Главная' },
    { label: 'Картотека проектов' },
  ]
}
