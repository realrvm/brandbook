import { Component, effect, inject } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { ProjectService } from './project.service'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { asideMenuItems } from './project'
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'bb-project',
  standalone: true,
  imports: [
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    SvgIconComponent,
    RouterLink,
    RouterLinkActive,
    NgOptimizedImage,
  ],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  private projectService = inject(ProjectService)
  public items: { route?: string; label: string }[] = [
    { route: '/', label: 'Главная' },
    { route: '/projects-file', label: 'Картотека проектов' },
  ]

  public asideMenuItems = asideMenuItems

  public projectData = this.projectService.partData
  public projectCard = this.projectService.partCard

  public title = ''
  public contacts = {} as {
    address: string
    phone: string
    www: string
    email: string
  }

  private effect = effect(() => {
    const companyContacts = this.projectData().contacts
    const title = this.projectCard().title
    this.title = title

    this.contacts = { ...this.contacts, ...companyContacts }
    this.items = [...this.items, { label: title }]
  })
}
