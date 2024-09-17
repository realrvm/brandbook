import { NgOptimizedImage } from '@angular/common'
import { Component } from '@angular/core'
import { MainSectionComponent } from '../main-section/main-section.component'

@Component({
  selector: 'bb-main-potential-of-kuzbass',
  standalone: true,
  imports: [MainSectionComponent, NgOptimizedImage],
  template: `
    <bb-main-section [title]="title" [isLightGrey]="isLightGrey">
      <div
        class="flex flex-col tablet:flex-row desktop:flex-row gap-4 h-[500px]"
      >
        <div
          class="flex-1 relative h-full border-b-[6px] border-b-transparent hover:border-b-orange"
        >
          <a href="potential-of-kuzbass" class="w-full h-full">
            <img
              ngSrc="assets/images/img/dummy/dummy6.jpg"
              alt="kuzbass"
              fill
              class="object-cover"
            />
            <div class="absolute inset-0 p-8 desktop:p-14 flex flex-col">
              <h3
                class="font-semibold text-[24px] tablet:text-[26px] desktop:text-[36px] leading-tight text-white left-0 max-w-[300px] mt-auto"
              >
                Географическое и логистическое расположение
              </h3>
            </div>
          </a>
        </div>
        <div class="flex-1 flex flex-col gap-4">
          <div
            class="relative flex-1 border-b-[6px] border-b-transparent hover:border-b-orange"
          >
            <a href="potential-of-kuzbass" class="w-full h-full">
              <img
                ngSrc="assets/images/img/dummy/dummy7.jpg"
                alt="kuzbass"
                fill
                class="object-cover"
              />
              <div class="absolute inset-0 p-8 desktop:p-14 flex flex-col">
                <h3
                  class="font-semibold text-[24px] tablet:text-[26px] desktop:text-[36px] leading-tight text-white left-0 mt-auto"
                >
                  Ресурсы и инфраструктура
                </h3>
              </div>
            </a>
          </div>
          <div
            class="relative flex-1 border-b-[6px] border-b-transparent hover:border-b-orange"
          >
            <a href="potential-of-kuzbass" class="w-full h-full">
              <img
                ngSrc="assets/images/img/dummy/dummy8.jpg"
                alt="kuzbass"
                fill
                class="object-cover"
              />
              <div class="absolute inset-0 p-8 desktop:p-14 flex flex-col">
                <h3
                  class="font-semibold text-[24px] tablet:text-[26px] desktop:text-[36px] leading-tight text-white left-0 max-w-[300px] mt-auto"
                >
                  Макропоказатели
                </h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </bb-main-section>
  `,
  styles: ``,
})
export class MainPotentialOfKuzbassComponent {
  public title = 'Потенциал Кузбасса'
  public isLightGrey = true
}
