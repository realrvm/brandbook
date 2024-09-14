import { Component, inject } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { ContactsService } from './contacts.service'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'

@Component({
  selector: 'bb-contacts',
  standalone: true,
  imports: [
    WrapperComponent,
    SvgIconComponent,
    PageTitleComponent,
    BreadcrumbsComponent,
    NgOptimizedImage,
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  private contactsService = inject(ContactsService)
  public items = [{ route: '/', label: 'Главная' }, { label: 'Контакты' }]

  public contacts = this.contactsService.contacts
}
