import { Component, inject } from '@angular/core'
import { MainSectionComponent } from '../main-section/main-section.component'
import { MainService } from '../main.service'
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'bb-main-serivces-for-business',
  standalone: true,
  imports: [MainSectionComponent, NgOptimizedImage],
  template: `
    <bb-main-section [title]="title" [isLightGrey]="isLightGrey">
      <div
        class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-3"
      >
        @for (service of services(); track service.id) {
          <div class="bg-white">
            <div class="h-[197px] relative">
              <img
                [ngSrc]="service.img"
                class="object-cover"
                fill
                alt="service"
              />
            </div>
            <div class="py-7 px-9">
              <h4 class="leading-tight font-semibold text-[26px] mb-9">
                {{ service.title }}
              </h4>
              <p class="text-md leading-normal">{{ service.content }}</p>
            </div>
          </div>
        }
      </div>
    </bb-main-section>
  `,
  styles: ``,
})
export class MainSerivcesForBusinessComponent {
  private readonly mainService = inject(MainService)

  public title = 'Сервисы бизнесу'
  public isLightGrey = true
  public services = this.mainService.services
}