import { Component, signal } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'

const navItems = [
  { path: 'services-for-business', text: 'Сервисы бизнесу' },
  { path: 'services-for-investors', text: 'Сервисы инвестору' },
  { path: 'market-participant', text: 'Участники рынка' },
  { path: 'projects-file', text: 'Картотека проектов' },
  { path: 'publications', text: 'Публикации' },
  { path: 'potential-of-kuzbass', text: 'Потенциал Кузбасса' },
  { path: 'services', text: 'Сервисы платформы' },
  { path: 'about', text: 'О проекте' },
]

@Component({
  selector: 'bb-header',
  standalone: true,
  imports: [SvgIconComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public navItems = signal(navItems)
}
