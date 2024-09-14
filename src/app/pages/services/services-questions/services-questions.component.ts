import { Component, inject } from '@angular/core'
import { AccordionModule } from 'primeng/accordion'
import { ServicesService } from '../services.service'

@Component({
  selector: 'bb-services-questions',
  standalone: true,
  imports: [AccordionModule],
  template: `
    <h3 class="font-semibold text-[24px] mb-3">Часто задаваемые вопросы</h3>
    <div class="flex items-center mb-12 max-w-[322px]">
      <span class="h-1.5 w-1/4 bg-blue"></span>
      <span class="h-1.5 w-3/4 bg-orange">></span>
    </div>
    <p-accordion
      [activeIndex]="0"
      expandIcon="pi pi-plus"
      collapseIcon="pi pi-angle-up"
    >
      @for (que of questions(); track que.id) {
        <div class="rounded-2xl overflow-hidden mb-2">
          <p-accordionTab [header]="que.question">
            <p>{{ que.answer }}</p>
          </p-accordionTab>
        </div>
      }
    </p-accordion>
  `,
  styles: `
    :host {
      @apply block;

      ::ng-deep .p-accordion-header {
        @apply text-[16px] font-semibold p-[10px] bg-light-grey;
      }

      ::ng-deep .p-accordion-header-link {
        @apply bg-light-grey;
      }

      ::ng-deep .p-accordion-content {
        @apply py-5 px-12 bg-light-grey border-t border-t-white;
      }
    }
  `,
})
export class ServicesQuestionsComponent {
  private servicesService = inject(ServicesService)

  public questions = this.servicesService.questions
}
