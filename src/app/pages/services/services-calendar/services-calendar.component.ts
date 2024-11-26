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

      ::ng-deep .p-datepicker-today > span.p-element,
      ::ng-deep .p-datepicker-today,
      ::ng-deep .p-datepicker table td > span.p-highlight {
        @apply bg-active-orange;
      }

      ::ng-deep .p-datepicker-calendar-container td,
      ::ng-deep .p-datepicker-calendar-container th {
        @apply p-1;
      }

      ::ng-deep .p-datepicker table td > span {
        @apply rounded-none font-medium text-black justify-end pr-1 pl-2;
      }

      ::ng-deep p-datepicker-other-month {
        color: var(--grey-strok) !important;
      }

      ::ng-deep .p-datepicker table th {
        @apply py-1;
      }

      ::ng-deep .p-datepicker table thead {
        @apply h-10;
      }

      ::ng-deep .p-datepicker table td,
      ::ng-deep .p-datepicker table th {
        @apply border border-grey-strok;
      }
    }
  `,
})
export class ServicesCalendarComponent {
  public date: Date[] | undefined
}
