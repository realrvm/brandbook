import { Component, computed, effect, inject, signal } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PlainButtonComponent } from '@core/shared/ui/buttons/plain-button/plain-button.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { SearchInputComponent } from '@core/shared/ui/search-input/search-input.component'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { participantButtons } from './market-participant'
import { MarketParticipantService } from './market-participant.service'
import { CommonModule } from '@angular/common'
import { Router } from '@angular/router'
import { ResponsiveService } from '@core/services/responsive.service'
import { Responsive } from '@core/shared/enums/enums'

@Component({
  selector: 'bb-market-participant',
  standalone: true,
  imports: [
    CommonModule,
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    PlainButtonComponent,
    SvgIconComponent,
    SearchInputComponent,
  ],
  templateUrl: './market-participant.component.html',
  styleUrl: './market-participant.component.scss',
})
export class MarketParticipantComponent {
  private mpService = inject(MarketParticipantService)
  private responsiveService = inject(ResponsiveService)
  private router = inject(Router)
  private width = this.responsiveService.width

  public participantBtns = signal(participantButtons)
  public isList = true

  private isHandset = computed(() => {
    return this.width() === Responsive.HANDSET
  })

  private effect = effect(() => {
    if (this.isHandset()) {
      this.isList = true
    }
  })

  public items = [
    { route: '/', label: 'Главная' },
    { label: 'Участники рынка' },
  ]

  public mpCards = this.mpService.mpCards

  handleSortBtn(id: number): void {
    this.participantBtns.update((prev) => {
      return prev.map((btn) => {
        if (btn.id === id) {
          return { ...btn, isActive: true }
        }
        return { ...btn, isActive: false }
      })
    })

    alert('TODO: сортировка?')
  }

  handleCardClick(id: number): void {
    this.router.navigate([`/market-participant/company/${id}`])
  }

  handleListClick(isList: boolean): void {
    this.isList = isList
  }
}
