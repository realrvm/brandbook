import { Component, input } from '@angular/core'
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'

@Component({
  selector: 'bb-search-input',
  standalone: true,
  imports: [AutoCompleteModule, FormsModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="formGroup" class="w-full">
      <p-autoComplete
        formControlName="text"
        [suggestions]="filteredItems"
        (completeMethod)="filtered($event)"
        [virtualScroll]="true"
        [dropdown]="true"
        field="name"
        styleClass="border {{
          isHeader()
            ? 'bg-white tablet:w-[254px] py-2.5 desktop:py-3'
            : 'bg-transparent tablet:w-[280px] py-3'
        }} border-grey-strok rounded-md pl-4 desktop:pl-6 w-full desktop:w-[500px] {{
          customStyles()
        }}"
        emptyMessage="Ничего не найдено"
        [placeholder]="placeholder()"
      />
    </form>
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
})
export class SearchInputComponent {
  public isHeader = input<boolean>(true)
  public placeholder = input<string>('Поиск по сайту')
  public customStyles = input<string>('')

  public filteredItems = []

  public formGroup = new FormGroup({
    text: new FormControl<string>(''),
  })

  public filtered(val: AutoCompleteCompleteEvent) {
    console.log(val.query)
  }
}
