import { Component, signal } from '@angular/core'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import { MultiSelectModule } from 'primeng/multiselect'
import { options } from './multi-select-input'

@Component({
  selector: 'bb-multi-select-input',
  standalone: true,
  imports: [MultiSelectModule, FormsModule, ReactiveFormsModule],
  template: `
    <form [formGroup]="formGroup" class="w-full">
      <p-multiSelect
        [options]="options()"
        formControlName="text"
        optionLabel="name"
        selectionLimit="1"
        styleClass="border border-grey-strok rounded-md pl-4 desktop:pl-6 w-full desktop:w-[500px] bg-transparent"
        placeholder="Сортировать по"
      >
        <ng-template pTemplate="filter"></ng-template>
        <ng-template pTemplate="item" let-item>
          <div class="text-orange bg-white ml-5">{{ item.name }}</div>
        </ng-template>
        <ng-template pTemplate="itemcheckboxicon" let-item> </ng-template>
      </p-multiSelect>
    </form>
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
})
export class MultiSelectInputComponent {
  public options = signal(options).asReadonly()

  public formGroup = new FormGroup({
    text: new FormControl<string>(''),
  })
}
