import { Component } from '@angular/core'

@Component({
  selector: 'bb-services-calendar',
  standalone: true,
  imports: [],
  template: `<div
    class="bg-grey-tab opacity-90 min-h-[459px] rounded-2xl pt-6 px-8 mb-6"
  >
    <h5 class="font-bold text-[16px] mb-4">Календарь мероприятий</h5>
    <div class="border-t border-t-bkgrnd"></div>
  </div>`,
  styles: `
    :host {
      @apply block;
    }
  `,
})
export class ServicesCalendarComponent {}
