import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CalendarModule } from 'primeng/calendar'

@Component({
  selector: 'bb-services-calendar',
  standalone: true,
  imports: [CalendarModule, FormsModule],
  template: `<div
    class="bg-grey-tab opacity-90 min-h-[420px] rounded-2xl p-6 mb-6"
  >
    <h5 class="font-bold text-[16px] mb-4">Календарь мероприятий</h5>
    <div class="border-t border-t-bkgrnd"></div>
    <p-calendar
      class="max-w-full"
      [(ngModel)]="date"
      [inline]="true"
      [showWeek]="false"
      [firstDayOfWeek]="1"
    />
  </div>`,
  styles: `
    :host {
      @apply block;

      ::ng-deep .p-datepicker,
      ::ng-deep .p-datepicker-header {
        @apply bg-grey-tab;
      }

      ::ng-deep .p-datepicker-month {
        @apply mr-2;
      }

      ::ng-deep .p-datepicker-month,
      ::ng-deep .p-datepicker-year {
        @apply text-[20px] font-semibold;
      }

      ::ng-deep .p-datepicker-today > span.p-element {
        @apply bg-orange hover:bg-active-orange;
      }

      ::ng-deep .p-datepicker-calendar-container td,
      ::ng-deep .p-datepicker-calendar-container th {
        @apply p-1;
      }
    }
  `,
})
export class ServicesCalendarComponent {
  public date: Date[] | undefined
}
