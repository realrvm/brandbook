import { Component, computed, inject, signal } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { ResponsiveService } from '@core/services/responsive.service'
import { Responsive } from '@core/shared/enums/enums'
import { SearchInputComponent } from '@core/shared/ui/search-input/search-input.component'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'
import { VisuallyImpairedComponent } from '@core/shared/ui/visually-impaired/visually-impaired.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { MenuItem } from 'primeng/api'
import { navItems } from '../nav-items'
import { SidebarComponent } from '../sidebar/sidebar.component'
import { OnOffService } from '@core/services/on-off.service'

@Component({
  selector: 'bb-header',
  standalone: true,
  imports: [
    SvgIconComponent,
    RouterLink,
    RouterLinkActive,
    WrapperComponent,
    SearchInputComponent,
    VisuallyImpairedComponent,
    SidebarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private responsiveService = inject(ResponsiveService)
  private onOffService = inject(OnOffService)

  public items: MenuItem[] = []

  private width = this.responsiveService.width

  public isDesktop = computed(() => this.width() === Responsive.DESKTOP)
  public isHandset = computed(() => this.width() === Responsive.HANDSET)

  public navItems = signal(navItems).asReadonly()

  handleMenuClick() {
    this.onOffService.setBurgerState(true)
  }
}
