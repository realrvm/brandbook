import { Component } from '@angular/core'
import { WrapperComponent } from '@core/wrapper/wrapper.component'

@Component({
  selector: 'bb-footer',
  standalone: true,
  imports: [WrapperComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
