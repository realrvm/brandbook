import { NgOptimizedImage } from '@angular/common'
import { Component, inject } from '@angular/core'
import { MainSectionComponent } from '../main-section/main-section.component'
import { MainService } from '../main.service'

@Component({
  selector: 'bb-main-serivces-for-investors',
  standalone: true,
  imports: [MainSectionComponent, NgOptimizedImage],
  template: `
    <bb-main-section [title]="title" [hasSwitch]="hasSwitch">
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
export class MainSerivcesForInvestorsComponent {
  private readonly mainService = inject(MainService)

  public title = 'Сервисы инвестору'
  public hasSwitch = true
  public services = this.mainService.services
}
