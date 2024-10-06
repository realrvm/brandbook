import { CommonModule, NgOptimizedImage } from '@angular/common'
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core'
import { Router } from '@angular/router'
import { PlainButtonComponent } from '@core/shared/ui/buttons/plain-button/plain-button.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { MainService } from '../main.service'
import { SwiperContainer } from 'swiper/element'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'

@Component({
  selector: 'bb-main-intro',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    WrapperComponent,
    PlainButtonComponent,
    SvgIconComponent,
  ],
  templateUrl: './main-intro.component.html',
  styleUrl: './main-intro.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainIntroComponent {
  private router = inject(Router)
  private mainService = inject(MainService)

  public slides = this.mainService.introItemsList

  private readonly swiperContainer =
    viewChild.required<ElementRef<SwiperContainer>>('swiperContainer')

  public swipePrev() {
    this.swiperContainer().nativeElement.swiper.slidePrev()
  }

  public swipeNext() {
    this.swiperContainer().nativeElement.swiper.slideNext()
  }

  public navigateTo(link: string) {
    this.router.navigate([link])
  }

  constructor() {
    effect(() => {
      if (this.slides().length !== 0) {
        const swiperElement = this.swiperContainer().nativeElement

        Object.assign(swiperElement, swiperOptions)
        swiperElement.initialize()
      }
    })
  }

  public handleMoreSuccessesClick() {
    this.router.navigate(['/history-of-success'])
  }
}

const swiperOptions = {
  slidesPerView: 3,
  effect: 'fade',
  loop: true,
  centeredSlides: true,
}
