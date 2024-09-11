import { Component, input } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { SvgIconComponent } from '../../svg-icon/svg-icon.component'

@Component({
  selector: 'bb-icon-button',
  standalone: true,
  imports: [ButtonModule, SvgIconComponent],
  template: `
    <button
      pButton
      class="flex items-center justify-center gap-3 font-semibold rounded-[9px] py-1.5 px-5 {{
        className()
      }}"
    >
      @if (position() === 'right') {
        <span>{{ label() }}</span>
        <bb-svg-icon [name]="icon()"></bb-svg-icon>
      } @else {
        <bb-svg-icon [name]="icon()"></bb-svg-icon>
        <span>{{ label() }}</span>
      }
    </button>
  `,
  styles: `
    :host {
      @apply tablet:inline-block desktop:inline-block;
    }
  `,
})
export class IconButtonComponent {
  public label = input<string>('')
  public className = input<string>('')
  public position = input<'right' | 'left'>('right')
  public icon = input<string>('')
}
