import { Component, inject, computed } from '@angular/core'
import { SvgIconComponent } from '../svg-icon/svg-icon.component'
import { ResponsiveService } from '@core/services/responsive.service'
import { Responsive } from '@core/shared/enums/enums'

@Component({
  selector: 'bb-visually-impaired',
  standalone: true,
  imports: [SvgIconComponent],
  template: `
    <button
      (click)="handleClick()"
      class="border border-grey-strok rounded-lg  p-2.5 flex items-center gap-2 desktop:gap-3"
    >
      <bb-svg-icon
        name="{{
          isDesktop() ? 'visually-impaired-md' : 'visually-impaired-sm'
        }}"
      ></bb-svg-icon>
      <span class="text-[9px] desktop:text-sm text-left text-blue leading-none"
        >Версия для <br />
        слабовидящих</span
      >
    </button>
  `,
  styles: `
    :host {
      @apply block;
    }
  `,
})
export class VisuallyImpairedComponent {
  private responsiveService = inject(ResponsiveService)

  private width = this.responsiveService.width

  public isDesktop = computed(() => this.width() === Responsive.DESKTOP)

  public handleClick() {
    alert('TODO: обработка кнопки')
  }
}
