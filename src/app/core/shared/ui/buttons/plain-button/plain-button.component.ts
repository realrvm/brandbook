import { Component, input } from '@angular/core'
import { ButtonModule } from 'primeng/button'

@Component({
  selector: 'bb-plain-button',
  standalone: true,
  imports: [ButtonModule],
  template: `
    <button
      pButton
      label="{{ label() }}"
      class="flex items-center justify-center font-semibold rounded-[9px] py-1.5 px-5 {{
        className()
      }}"
    ></button>
  `,
  styles: `
    :host {
      @apply inline-block;
    }
  `,
})
export class PlainButtonComponent {
  public label = input<string>('')
  public className = input<string>('')
}
