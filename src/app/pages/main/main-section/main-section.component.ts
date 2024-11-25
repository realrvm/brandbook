import { Component, input } from '@angular/core'
import { IconButtonComponent } from '@core/shared/ui/buttons/icon-button/icon-button.component'
import { WrapperComponent } from '@core/wrapper/wrapper.component'
import { MainSwitchComponent } from './main-switch/main-switch.component'

@Component({
  selector: 'bb-main-section',
  standalone: true,
  imports: [IconButtonComponent, WrapperComponent, MainSwitchComponent],
  template: `
    <div
      class="pt-[75px] pb-[110px] {{ isLightGrey() ? 'bg-light-grey' : '' }}"
    >
      <bb-wrapper>
        <section class="flex flex-col">
          <div class="flex justify-between items-baseline">
            <div class="flex items-center gap-9 mb-14 flex-wrap">
              <div class="flex flex-col gap-2">
                <h3 class="font-semibold text-[40px]">{{ title() }}</h3>
                <div class="flex">
                  @if (isLightGrey()) {
                    <span class="h-1.5 w-1/3 bg-orange"></span>
                    <span class="h-1.5 w-2/3 bg-blue"></span>
                  } @else {
                    <span class="h-1.5 w-1/3 bg-blue"></span>
                    <span class="h-1.5 w-2/3 bg-orange"></span>
                  }
                </div>
              </div>
              <bb-icon-button
                label="Все"
                className="text-white bg-orange hover:bg-active-orange h-[30px]"
                icon="small-arrow"
              />
            </div>
            @if (hasSwitch()) {
              <bb-main-switch />
            }
          </div>
          <ng-content />
        </section>
      </bb-wrapper>
    </div>
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
})
export class MainSectionComponent {
  public isLightGrey = input(false)
  public hasSwitch = input(false)
  public title = input.required<string>()
}
