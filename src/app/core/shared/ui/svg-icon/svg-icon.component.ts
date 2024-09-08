import { HttpClient } from '@angular/common/http'
import { Component, inject, input, OnChanges } from '@angular/core'
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { tap } from 'rxjs'

@Component({
  selector: 'bb-svg-icon',
  standalone: true,
  imports: [],
  template: `<span [innerHTML]="svgIcon"></span>`,
  styles: ``,
})
export class SvgIconComponent implements OnChanges {
  private http = inject(HttpClient)
  private sanitizer = inject(DomSanitizer)

  public name = input<string>('')

  public svgIcon?: SafeHtml

  ngOnChanges() {
    if (!this.name()) {
      this.svgIcon = ''
      return
    }

    this.http
      .get(`assets/images/svg/${this.name()}.svg`, { responseType: 'text' })
      .pipe(
        tap(
          (value) =>
            (this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(value)),
        ),
      )
      .subscribe()
  }
}
