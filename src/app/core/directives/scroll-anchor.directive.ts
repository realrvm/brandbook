import { Directive, HostListener, inject, Input } from '@angular/core'
import { ScrollManagerDirective } from './scroll-manager.directive'

@Directive({
  selector: '[bbScrollAnchor]',
  standalone: true,
})
export class ScrollAnchorDirective {
  @Input('bbScrollAnchor') id!: string | number
  private manager = inject(ScrollManagerDirective)

  @HostListener('click')
  scroll() {
    this.manager.scroll(this.id)
  }
}
