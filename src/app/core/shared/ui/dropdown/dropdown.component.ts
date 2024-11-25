import { Component, input } from '@angular/core'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import { DropdownModule } from 'primeng/dropdown'

interface DropdownItem {
  name: string
  value: string
}

@Component({
  selector: 'bb-dropdown',
  standalone: true,
  imports: [DropdownModule, FormsModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <p-dropdown
        formControlName="sortProperty"
        [options]="options()"
        [placeholder]="placeholder()"
        optionLabel="name"
        styleClass="bg-bkgrnd h-[47px] py-1.5 border shadow-none border-grey-strok hover:border-orange rounded-md pl-4 {{
          customStyles()
        }}"
      >
        <ng-template pTemplate="selectedItem">
          <div class="flex align-items-center gap-2">
            <div class="w-5 h-5 bg-orange"></div>
            <div>test</div>
          </div>
        </ng-template>
      </p-dropdown>
    </form>
  `,
  styles: `
    :host {
      @apply block;

      ::ng-deep .p-dropdown .p-dropdown-trigger {
        @apply text-orange;
      }

      ::ng-deep .p-dropdown .p-dropdown-trigger[aria-expanded='true'] {
        @apply rotate-180;
      }
    }
  `,
})
export class DropdownComponent {
  public customStyles = input<string>('')
  public placeholder = input.required<string>()
  public options = input<DropdownItem[]>([])

  public form = new FormGroup({
    sortProperty: new FormControl<DropdownItem | null>(null),
  })
}
