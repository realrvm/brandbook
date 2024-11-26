import { Component, input } from '@angular/core'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import { DropdownModule } from 'primeng/dropdown'
import { SvgIconComponent } from '../svg-icon/svg-icon.component'
import { NgClass } from '@angular/common'

interface DropdownItem {
  name: string
  value: string
  icon?: string
}

@Component({
  selector: 'bb-dropdown',
  standalone: true,
  imports: [
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    SvgIconComponent,
    NgClass,
  ],
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
        <ng-template let-item pTemplate="item">
          <div class="flex align-items-center gap-9">
            @if (item.icon) {
              <bb-svg-icon [name]="item.icon" />
              <div
                class="font-semibold text-[16px]"
                [ngClass]="
                  item.icon === 'cb-chosen' ? 'text-orange' : 'text-black'
                "
              >
                {{ item.name }}
              </div>
            } @else {
              <div class="font-semibold text-[16px]">{{ item.name }}</div>
            }
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

      ::ng-deep
        .p-dropdown-panel
        .p-dropdown-items
        .p-dropdown-item:not(.p-highlight):not(.p-disabled).p-focus {
        @apply bg-white;
      }

      ::ng-deep ul.p-dropdown-items {
        @apply p-5;
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
