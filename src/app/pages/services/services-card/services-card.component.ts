import { NgOptimizedImage } from '@angular/common'
import { Component, input } from '@angular/core'

@Component({
  selector: 'bb-services-card',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <div class="bg-white">
      <div class="relative w-full h-[197px]">
        <img
          ngSrc="{{ img() }}"
          fill
          alt="meetup card"
          class="object-contain"
          priority
        />
      </div>
      <div class="flex items-center justify-between pr-8 pt-3 mb-4 gap-3">
        <div
          class="min-w-[108px] shrink h-8 bg-orange text-white grid place-items-center"
        >
          {{ date() }}
        </div>
        <span class="text-orange text-end text-sm"
          >Дата окончания сбора заявок {{ endDate() }}</span
        >
      </div>
      <div class="px-9 pb-9">
        <h3 class="font-semibold text-[28px] leading-tight mb-9">
          {{ title() }}
        </h3>
        <p>{{ content() }}</p>
      </div>
    </div>
  `,
  styles: ``,
})
export class ServicesCardComponent {
  public title = input('title')
  public content = input('content')
  public date = input('date')
  public endDate = input('endDate')
  public img = input('img')
}
