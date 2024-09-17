import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Component, signal } from '@angular/core'
import { MainSectionComponent } from '../main-section/main-section.component'
import { publicationsButtons } from '@pages/publications/publications'
import { PlainButtonComponent } from '@core/shared/ui/buttons/plain-button/plain-button.component'

@Component({
  selector: 'bb-main-publications',
  standalone: true,
  imports: [
    CommonModule,
    MainSectionComponent,
    NgOptimizedImage,
    PlainButtonComponent,
  ],
  templateUrl: './main-publications.component.html',
  styleUrl: './main-publications.component.scss',
})
export class MainPublicationsComponent {
  public title = 'Публикации'
  public publicationsBtns = signal(publicationsButtons)

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
