import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { servicesButtons } from './services'
import { PlainButtonComponent } from '@core/shared/ui/buttons/plain-button/plain-button.component'
import { SearchInputComponent } from '@core/shared/ui/search-input/search-input.component'
import { ServicesCardComponent } from './services-card/services-card.component'
import { ServicesFinancingComponent } from './services-financing/services-financing.component'
import { ServicesFormComponent } from './services-form/services-form.component'
import { ServicesQuestionsComponent } from './services-questions/services-questions.component'
import { ServicesCalendarComponent } from './services-calendar/services-calendar.component'
import { ServicesService } from './services.service'
import { SubscriptionFormComponent } from '@core/widgets/subscription-form/subscription-form.component'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'bb-services',
  standalone: true,
  imports: [
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    PlainButtonComponent,
    SearchInputComponent,
    ServicesCardComponent,
    ServicesFinancingComponent,
    ServicesFormComponent,
    ServicesQuestionsComponent,
    ServicesCalendarComponent,
    SubscriptionFormComponent,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent implements AfterViewInit {
  public items = [
    { route: '/', label: 'Главная' },
    { label: 'Сервисы платформы' },
  ]

  private servicesService = inject(ServicesService)
  private activeRoute = inject(ActivatedRoute)
  private emailForm = viewChild<ElementRef<HTMLElement>>('emailForm')

  public sortButtons = signal(servicesButtons)
  public servicesFinancing = this.servicesService.servicesFinancing
  public meetups = this.servicesService.meetups

  public handleSortBtn(id: number): void {
    this.sortButtons.update((prev) => {
      return prev.map((btn) => {
        if (btn.id === id) {
          return { ...btn, isActive: true }
        }
        return { ...btn, isActive: false }
      })
    })

    alert('TODO: сортировка?')
  }

  public handleMeetupsBtn(): void {
    alert('TODO: Что показывает эта кнопка?')
  }

  ngAfterViewInit(): void {
    const fragment = this.activeRoute.snapshot.fragment

    if (fragment === 'emailForm') {
      const section = this.emailForm()?.nativeElement.querySelector(
        '#emailForm',
      ) as HTMLElement

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })
      }
    }
  }
}
