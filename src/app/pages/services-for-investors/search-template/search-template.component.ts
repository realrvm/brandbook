import { Component, inject, signal } from '@angular/core'
import { PlainButtonComponent } from '@core/shared/ui/buttons/plain-button/plain-button.component'
import { SearchInputComponent } from '@core/shared/ui/search-input/search-input.component'
import {
  dropdownInvestorsFromToList,
  dropdownInvestorsSortList,
  dropdownInvestorsStatusList,
  searchTemplateButtons,
} from './search-template'
import { DropdownComponent } from '@core/shared/ui/dropdown/dropdown.component'
import { SearchTemplateService } from './search-template.service'
import { SearchAsideListComponent } from '@core/widgets/search-aside-list/search-aside-list.component'

@Component({
  selector: 'bb-search-template',
  standalone: true,
  imports: [
    SearchInputComponent,
    SearchAsideListComponent,
    PlainButtonComponent,
    DropdownComponent,
  ],
  templateUrl: './search-template.component.html',
  styleUrl: './search-template.component.scss',
})
export class SearchTemplateComponent {
  private searchTemplateService = inject(SearchTemplateService)

  public searchTemplateButtons = signal(searchTemplateButtons)
  public searchOptions = signal(dropdownInvestorsSortList).asReadonly()
  public statusOptions = signal(dropdownInvestorsStatusList).asReadonly()
  public fromToOptions = signal(dropdownInvestorsFromToList).asReadonly()

  public regions = this.searchTemplateService.regionsList
  public industries = this.searchTemplateService.industriesList

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
