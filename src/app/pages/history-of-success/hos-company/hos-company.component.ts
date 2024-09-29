import { Component, inject, OnInit } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { HistoryOfSuccessService } from '../history-of-success.service'
import { ActivatedRoute } from '@angular/router'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'

@Component({
  selector: 'bb-hos-company',
  standalone: true,
  imports: [
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    SvgIconComponent,
  ],
  templateUrl: './hos-company.component.html',
  styleUrl: './hos-company.component.scss',
})
export class HosCompanyComponent implements OnInit {
  private hosService = inject(HistoryOfSuccessService)
  private route = inject(ActivatedRoute)

  public items: { route?: string; label: string }[] = [
    { route: '/', label: 'Главная' },
    { route: '/history-of-success', label: 'Истории успеха' },
  ]
  public title = 'История успеха '

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    const { title } = this.hosService
      .hosCards()
      .find((card) => card.id === Number(id)) ?? { title: '' }

    this.title = this.title + title
    this.items = [...this.items, { label: title }]
  }
}
