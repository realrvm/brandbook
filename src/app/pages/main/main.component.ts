import { Component } from '@angular/core'
import { WrapperComponent } from '@core/wrapper/wrapper.component'

@Component({
  selector: 'bb-main',
  standalone: true,
  imports: [WrapperComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {}
