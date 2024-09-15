import { Component, inject, signal } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { publicationsButtons } from './publications'
import { PlainButtonComponent } from '@core/shared/ui/buttons/plain-button/plain-button.component'
import { SearchInputComponent } from '@core/shared/ui/search-input/search-input.component'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { PublicationsService } from './publications.service'
import { SubscriptionFormComponent } from '@core/widgets/subscription-form/subscription-form.component'

@Component({
  selector: 'bb-publications',
  standalone: true,
  imports: [
    CommonModule,
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    PlainButtonComponent,
    SearchInputComponent,
    NgOptimizedImage,
    SubscriptionFormComponent,
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss',
})
export class PublicationsComponent {
  public publicationsBtns = signal(publicationsButtons)
  private publicationsService = inject(PublicationsService)

  public items = [{ route: '/', label: 'Главная' }, { label: 'Публикации' }]
  public newsList = this.publicationsService.mainNewsList
  public resultsList = this.publicationsService.searchResultsList

  handleSortBtn(id: number): void {
    this.publicationsBtns.update((prev) => {
      return prev.map((btn) => {
        if (btn.id === id) {
          return { ...btn, isActive: true }
        }
        return { ...btn, isActive: false }
      })
    })

    alert('TODO: сортировка?')
  }
}
