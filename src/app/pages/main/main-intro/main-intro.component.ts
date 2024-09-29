import { NgOptimizedImage } from '@angular/common'
import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'
import { PlainButtonComponent } from '@core/shared/ui/buttons/plain-button/plain-button.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'

@Component({
  selector: 'bb-main-intro',
  standalone: true,
  imports: [NgOptimizedImage, WrapperComponent, PlainButtonComponent],
  template: `
    <section
      class="bg-dark-blue handset:h-[600px] h-[338px] flex handset:flex-col flex-row relative"
    >
      <div
        class="w-full tablet:w-1/2 desktop:w-1/2 h-[259px] tablet:h-full desktop:h-full absolute"
      >
        <img
          ngSrc="assets/images/img/dummy/dummy5.jpg"
          alt="intro"
          class="object-cover"
          fill
          priority
        />
      </div>
      <bb-wrapper>
        <div class="py-10 flex handset:flex-col z-1 relative h-full">
          <div class="flex-1 flex flex-col h-full justify-between">
            <h1
              class="font-semibold text-white handset:mb-[50px] tablet:text-[34px] text-[50px] leading-none relative before:absolute before:h-[90px] before:w-1.5 before:bg-orange before:-left-5 before:top-2 ml-5"
            >
              Истории <br />
              успеха
            </h1>
            <bb-plain-button
              label="Все"
              class="bg-orange text-white self-start rounded-[9px] hover:bg-active-orange"
              (click)="handleMoreSuccessesClick()"
            />
          </div>
          <div
            class="flex-1 flex flex-col justify-between h-full handset:mt-[60px] tablet:pl-[100px] desktop:pl-[200px] py-5"
          >
            <h1
              class="font-semibold text-white text-[34px] desktop:text-[39px] leading-none"
            >
              Коммерческое <br />
              строительство
            </h1>
            <div class="mt-auto">
              <p class="text-white">
                Развитие строительного бизнеса в условиях экономического
                кризиса, нестандартные пути решения сложных задач.
              </p>
            </div>
          </div>
        </div>
      </bb-wrapper>
    </section>
  `,
  styles: ``,
})
export class MainIntroComponent {
  private router = inject(Router)

  public handleMoreSuccessesClick() {
    this.router.navigate(['/history-of-success'])
  }
}
