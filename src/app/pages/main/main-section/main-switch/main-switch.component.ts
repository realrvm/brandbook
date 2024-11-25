import { Component } from '@angular/core'
import { SvgIconComponent } from '@core/shared/ui/svg-icon/svg-icon.component'

@Component({
  selector: 'bb-main-switch',
  standalone: true,
  imports: [SvgIconComponent],
  template: `
    <div class="flex gap-5 items-center">
      <div class="flex gap-6">
        <span class="h-[9px] w-[9px] rounded-full bg-orange"></span>
        <span class="h-[9px] w-[9px] rounded-full bg-grey-indicator"></span>
        <span class="h-[9px] w-[9px] rounded-full bg-grey-indicator"></span>
        <span class="h-[9px] w-[9px] rounded-full bg-grey-indicator"></span>
      </div>
      <div class="flex gap-3">
        <bb-svg-icon name="switch-prev" />
        <bb-svg-icon name="switch-next" />
      </div>
    </div>
  `,
  styles: ``,
})
export class MainSwitchComponent {}
