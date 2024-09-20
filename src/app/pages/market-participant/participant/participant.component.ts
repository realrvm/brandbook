import { Component, effect, inject } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { ParticipantService } from './participant.service'

@Component({
  selector: 'bb-participant',
  standalone: true,
  imports: [
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    SvgIconComponent,
  ],
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.scss',
})
export class ParticipantComponent {
  private participantService = inject(ParticipantService)

  public items: { route?: string; label: string }[] = [
    { route: '/', label: 'Главная' },
    { route: '/market-participant', label: 'Участники рынка' },
  ]
  public title = ''
  public contacts = {} as {
    address: string
    phone: string
    www: string
    email: string
  }

  public partData = this.participantService.partData
  public partCard = this.participantService.partCard

  private effect = effect(() => {
    const companyContacts = this.partData().contacts
    const title = this.partCard().title
    this.title = title

    this.contacts = { ...this.contacts, ...companyContacts }
    this.items = [...this.items, { label: title }]
  })
}
