import { Component, inject, signal, ViewChild } from '@angular/core'
import { Router, RouterLink, RouterLinkActive } from '@angular/router'
import { OnOffService } from '@core/services/on-off.service'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { Sidebar } from 'primeng/sidebar'
import { SidebarModule } from 'primeng/sidebar'
import { navItems, navItemsFooter } from '../nav-items'
import { IconButtonComponent } from '@core/shared/ui/buttons/icon-button/icon-button.component'

@Component({
  selector: 'bb-sidebar',
  standalone: true,
  imports: [
    SidebarModule,
    SvgIconComponent,
    WrapperComponent,
    RouterLink,
    RouterLinkActive,
    IconButtonComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @ViewChild('sidebarRef') sidebarRef!: Sidebar
  private onOffService = inject(OnOffService)
  private router = inject(Router)

  public sidebarVisible = this.onOffService.burgerState.asReadonly()

  public navItems = signal([...navItems, ...navItemsFooter]).asReadonly()

  closeCallback(e: Event): void {
    this.onOffService.setBurgerState(false)
    this.sidebarRef.close(e)
  }

  public redirectToEmail(e: Event) {
    this.onOffService.setBurgerState(false)
    this.sidebarRef.close(e)
    this.router.navigate(['/services'], { fragment: 'emailForm' })
  }
}
