import { Component, inject } from '@angular/core'
import { MainSectionComponent } from '../main-section/main-section.component'
import { MainService } from '../main.service'
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'bb-main-market-participant',
  standalone: true,
  imports: [MainSectionComponent, NgOptimizedImage],
  template: `
    <bb-main-section [title]="title" [isLightGrey]="isLightGrey">
      <div
        class="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-5 gap-4"
      >
        @for (mp of marketParticipants(); track mp.id) {
          <div class="bg-white flex flex-col min-w-[230px]">
            <div class="h-[141px] relative">
              <img [ngSrc]="mp.img" class="object-cover" alt="mg image" fill />
            </div>
            <div class="py-4 px-7">
              <div
                class="grid grid-cols-2 pb-3 mb-3 border-b border-b-light-grey gap-y-4"
              >
                <dl>
                  <dt class="text-blue text-[17px] font-semibold leading-none">
                    {{ mp.emitents }}
                  </dt>
                  <dd class="text-[10px]">эмитентов</dd>
                </dl>
                <dl>
                  <dt
                    class="text-orange text-[17px] font-semibold leading-none"
                  >
                    {{ mp.stocks }}
                  </dt>
                  <dd class="text-[10px]">выпусков акций</dd>
                </dl>
                <dl>
                  <dt
                    class="text-orange text-[17px] font-semibold leading-none"
                  >
                    {{ mp.bonds }}
                  </dt>
                  <dd class="text-[10px]">выпусков облигаций</dd>
                </dl>
                <dl>
                  <dt
                    class="text-orange text-[17px] font-semibold leading-none"
                  >
                    {{ mp.actions }}
                  </dt>
                  <dd class="text-[10px]">внебиржевых выпусков</dd>
                </dl>
              </div>
              <h4 class="font-[23px] text-center font-semibold">
                {{ mp.result }}
              </h4>
            </div>
          </div>
        }
      </div>
    </bb-main-section>
  `,
  styles: ``,
})
export class MainMarketParticipantComponent {
  private mpService = inject(MainService)

  public title = 'Участники рынка'
  public isLightGrey = true

  public marketParticipants = this.mpService.marketParticipants
}
