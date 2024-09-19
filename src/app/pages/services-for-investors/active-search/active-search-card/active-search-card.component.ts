import { Component } from '@angular/core'

@Component({
  selector: 'bb-active-search-card',
  standalone: true,
  imports: [],
  template: `
    <div
      class="bg-light-grey border-b-[6px] border-b-grey-indicator pt-4 pb-9 px-6"
    >
      <div
        class="flex flex-col desktop:flex-row desktop:items-center justify-between gap-3 mb-5"
      >
        <span class="font-semibold text-[20px] text-orange">
          ИнфоВотч-000А-00
        </span>
        <span class="text-md">ISIN: -</span>
        <span class="text-md"
          >Регистрационный номер: 000000-0000-0000-А 0001</span
        >
      </div>
      <div class="grid tablet:grid-cols-1 desktop:grid-cols-4 gap-3">
        <dl>
          <dt class="font-bold text-[20px] mb-3">Название</dt>
          <dd class="text-md">Название площадки</dd>
        </dl>
        <dl>
          <dt class="font-bold text-[20px] mb-3">Место выпуска ЦФА</dt>
          <dd class="text-md">Где выпущен ЦФА</dd>
        </dl>
      </div>
    </div>
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
})
export class ActiveSearchCardComponent {}
