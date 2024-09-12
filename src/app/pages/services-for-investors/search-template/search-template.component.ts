import { Component, signal } from '@angular/core'
import { PlainButtonComponent } from '@core/shared/ui/buttons/plain-button/plain-button.component'
import { SearchInputComponent } from '@core/shared/ui/search-input/search-input.component'
import { searchTemplateButtons } from './search-template'
import { MultiSelectInputComponent } from '@core/shared/ui/multi-select-input/multi-select-input.component'

@Component({
  selector: 'bb-search-template',
  standalone: true,
  imports: [
    MultiSelectInputComponent,
    SearchInputComponent,
    PlainButtonComponent,
  ],
  templateUrl: './search-template.component.html',
  styleUrl: './search-template.component.scss',
})
export class SearchTemplateComponent {
  public searchTemplateButtons = signal(searchTemplateButtons)

  handleSortBtn(id: number): void {
    this.searchTemplateButtons.update((prev) => {
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
