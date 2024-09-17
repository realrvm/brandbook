import { NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'bb-main-intro',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <section
      class="bg-dark-blue h-[338px] flex flex-col tablet:flex-row desktop:flex-row"
    >
      <div
        class="w-full tablet:w-1/2 desktop:w-1/2 h-[259px] tablet:h-full desktop:h-full relative"
      >
        <img
          ngSrc="assets/images/img/dummy/dummy5.jpg"
          alt="intro"
          class="object-cover"
          fill
          priority
        />
      </div>
      <div
        class="w-full tablet:w-1/2 desktop:w-1/2 h-[259px] tablet:h-full desktop:h-full p-4 tablet:px-7 tablet:py-4 desktop:px-[97px] desktop:py-10"
      >
        <h1 class="text-white mb-12 font-semibold text-[39px] leading-tight">
          В процессе разработки
        </h1>
        <p class="text-white text-md leading-relaxed max-w-[450px]">
          Находится в процессе разработки. Under the development.
        </p>
      </div>
    </section>
  `,
  styles: ``,
})
export class MainIntroComponent {}
