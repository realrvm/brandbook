import { Component, inject } from '@angular/core'
import { ResponsiveService } from '@core/services/responsive.service'
import { WrapperComponent } from '@core/wrapper/wrapper.component'

@Component({
  selector: 'bb-main',
  standalone: true,
  imports: [WrapperComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  private responsiveService = inject(ResponsiveService)

  public isWebWidth = this.responsiveService.isWebWidth
}
