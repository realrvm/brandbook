import { Component, input } from '@angular/core'

@Component({
  selector: 'bb-page-title',
  standalone: true,
  imports: [],
  template: `
    <h1 class="font-semibold text-[40px]">
      {{ title() }}
    </h1>
  `,
  styles: ``,
})
export class PageTitleComponent {
  public title = input<string>('')
}
