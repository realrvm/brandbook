import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Component, inject } from '@angular/core'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { HistoryOfSuccessService } from './history-of-success.service'
import { Router } from '@angular/router'

@Component({
  selector: 'bb-history-of-success',
  standalone: true,
  imports: [
    CommonModule,
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    NgOptimizedImage,
  ],
  templateUrl: './history-of-success.component.html',
  styleUrl: './history-of-success.component.scss',
})
export class HistoryOfSuccessComponent {
  private hosService = inject(HistoryOfSuccessService)
  private router = inject(Router)

  public items = [{ route: '/', label: 'Главная' }, { label: 'Истории успеха' }]

  public hosCards = this.hosService.hosCards

  public handlePosCardClick(id: number) {
    this.router.navigate([`/history-of-success/hos-company/${id}`])
  }
}
