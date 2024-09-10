import { Component, input } from '@angular/core'

@Component({
  selector: 'bb-page-title',
  standalone: true,
  imports: [],
  template: `
    <h1
      class="font-semibold text-[28px] tablet:text-[40px] desktop:text-[40px] leading-[1.1]"
    >
      {{ title() }}
    </h1>
  `,
  styles: ``,
})
export class PageTitleComponent {
  public title = input<string>('')
}
