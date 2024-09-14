import { Component, input } from '@angular/core'
import { PlainButtonComponent } from '@core/shared/ui/buttons/plain-button/plain-button.component'

@Component({
  selector: 'bb-services-financing',
  standalone: true,
  imports: [PlainButtonComponent],
  template: `
    <section class="mb-[74px] max-w-[870px]">
      <h3 class="font-semibold text-[24px] mb-3">
        Финансирование муниципальных проектов
      </h3>
      <div class="flex max-w-[500px] mb-16">
        <span class="h-1.5 bg-orange w-1/3"></span>
        <span class="h-1.5 bg-blue w-2/3"></span>
      </div>
      <p class="leading-relaxed mb-12">{{ content() }}</p>
      <bb-plain-button
        label="Отправить заявку на экспресс-оценку"
        className="bg-orange text-white hover:bg-active-orange h-16"
        (click)="handleApplicationBtn()"
      />
    </section>
  `,
  styles: ``,
})
export class ServicesFinancingComponent {
  public content = input<string>('content')

  handleApplicationBtn(): void {
    alert('TODO: что делает эта кнопка?')
  }
}
