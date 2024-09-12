import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core'
import { ScrollManagerDirective } from './scroll-manager.directive'

@Directive({
  selector: '[bbScrollSection]',
  standalone: true,
})
export class ScrollSectionDirective implements OnInit, OnDestroy {
  @Input('bbScrollSection') id!: string | number
  private host = inject(ElementRef)
  private manager = inject(ScrollManagerDirective)

  ngOnInit() {
    this.manager.register(this)
  }

  ngOnDestroy() {
    this.manager.remove(this)
  }

  scroll() {
    this.host.nativeElement.scrollIntoView({
      behavior: 'smooth',
    })
  }
}
