import { Component } from '@angular/core'

@Component({
  selector: 'bb-wrapper',
  standalone: true,
  imports: [],
  template: `
    <div class="max-w-[1300px] w-full px-5 mx-auto">
      <ng-content />
    </div>
  `,
  styles: `
    :host {
      @apply block w-full;
    }
  `,
})
export class WrapperComponent {}
