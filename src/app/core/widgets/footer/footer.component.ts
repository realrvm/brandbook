import { Component, computed, inject, signal } from '@angular/core'
import { RouterLink } from '@angular/router'
import { ResponsiveService } from '@core/services/responsive.service'
import { Responsive } from '@core/shared/enums/enums'
import { SearchInputComponent } from '@core/shared/ui/search-input/search-input.component'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'
import { VisuallyImpairedComponent } from '@core/shared/ui/visually-impaired/visually-impaired.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { navItems } from '../nav-items'

@Component({
  selector: 'bb-footer',
  standalone: true,
  imports: [
    WrapperComponent,
    SvgIconComponent,
    RouterLink,
    SearchInputComponent,
    VisuallyImpairedComponent,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private responsiveService = inject(ResponsiveService)
  public navItems = signal(navItems).asReadonly()

  private width = this.responsiveService.width
  public isHandset = computed(() => this.width() === Responsive.HANDSET)
}
