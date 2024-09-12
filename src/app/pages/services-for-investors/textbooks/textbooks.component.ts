import { Component, inject, signal } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { TextbooksService } from './textbooks.service'
import { SearchInputComponent } from '@core/shared/ui/search-input/search-input.component'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Router } from '@angular/router'
import { textbooksButtons } from './textbooks'
import { PlainButtonComponent } from '@core/shared/ui/buttons/plain-button/plain-button.component'

@Component({
  selector: 'bb-textbooks',
  standalone: true,
  imports: [
    CommonModule,
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    SearchInputComponent,
    NgOptimizedImage,
    PlainButtonComponent,
  ],
  templateUrl: './textbooks.component.html',
  styleUrl: './textbooks.component.scss',
})
export class TextbooksComponent {
  private tbService = inject(TextbooksService)
  private router = inject(Router)

  public textbooksList = this.tbService.textbooksList
  public textbooksButtons = signal(textbooksButtons)

  public items = [
    { route: '/', label: 'Главная' },
    { route: '/services-for-investors', label: 'Сервисы инвестору' },
    { label: 'Учебник' },
  ]

  handleTBCardClick(id: string): void {
    this.router.navigate([`/services-for-investors/textbooks/${id}`])
  }

  handleSortBtn(id: number): void {
    this.textbooksButtons.update((prev) => {
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
