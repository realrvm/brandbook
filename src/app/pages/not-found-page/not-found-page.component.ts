import { NgOptimizedImage } from '@angular/common'
import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { BreadcrumbsComponent } from '@core/shared/ui/breadcrumbs/breadcrumbs.component'
import { PlainButtonComponent } from '@core/shared/ui/buttons/plain-button/plain-button.component'
import { PageTitleComponent } from '@core/shared/ui/page-title/page-title.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'

@Component({
  selector: 'bb-not-found-page',
  standalone: true,
  imports: [
    WrapperComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    NgOptimizedImage,
    PlainButtonComponent,
  ],
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss',
})
export class NotFoundPageComponent {
  private router = inject(Router)
  public items = [{ route: '/', label: 'Главная' }, { label: '404' }]

  public handleBackButton(): void {
    this.router.navigate(['/'])
  }
}
