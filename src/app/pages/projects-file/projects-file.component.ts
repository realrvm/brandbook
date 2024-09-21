import { Component, computed, effect, inject, signal } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Router } from '@angular/router'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PlainButtonComponent } from '@core/shared/ui/buttons/plain-button/plain-button.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { SearchInputComponent } from '@core/shared/ui/search-input/search-input.component'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'
import { SearchAsideListComponent } from '@core/widgets/search-aside-list/search-aside-list.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { projectsFileButtons } from './projects-file'
import { ProjectsFileService } from './projects-file.service'
import { ResponsiveService } from '@core/services/responsive.service'
import { Responsive } from '@core/shared/enums/enums'

@Component({
  selector: 'bb-projects-file',
  standalone: true,
  imports: [
    CommonModule,
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    SvgIconComponent,
    SearchAsideListComponent,
    SearchInputComponent,
    PlainButtonComponent,
    NgOptimizedImage,
  ],
  templateUrl: './projects-file.component.html',
  styleUrl: './projects-file.component.scss',
})
export class ProjectsFileComponent {
  private pfService = inject(ProjectsFileService)
  private router = inject(Router)
  private responsiveService = inject(ResponsiveService)
  private width = this.responsiveService.width

  public isList = true
  public items = [
    { route: '/', label: 'Главная' },
    { label: 'Картотека проектов' },
  ]

  private isHandset = computed(() => {
    return this.width() === Responsive.HANDSET
  })

  private effect = effect(() => {
    if (this.isHandset()) {
      this.isList = true
    }
  })

  public pfBtns = signal(projectsFileButtons)
  public pfProceeds = this.pfService.proceedsList
  public pfRegions = this.pfService.regionsList
  public pfIndustries = this.pfService.industriesList
  public pfCards = this.pfService.pfCardsList

  handleSortBtn(id: number): void {
    this.pfBtns.update((prev) => {
      return prev.map((btn) => {
        if (btn.id === id) {
          return { ...btn, isActive: true }
        }
        return { ...btn, isActive: false }
      })
    })

    alert('TODO: сортировка?')
  }

  handleListClick(isList: boolean): void {
    this.isList = isList
  }

  handlePFCardClick(id: number) {
    this.router.navigate([`/projects-file/project/${id}`])
  }
}
