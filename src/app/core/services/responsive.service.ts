import { inject, Injectable } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { toSignal } from '@angular/core/rxjs-interop'
import { debounceTime, map, Observable } from 'rxjs'
import { DEBOUNCE_TIME } from '@core/shared/constants'
import { Responsive } from '@core/shared/enums/enums'

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private breakpointObserver = inject(BreakpointObserver)

  private responsive$: Observable<Responsive> = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      debounceTime(DEBOUNCE_TIME),
      map((result) => {
        const breakpoint = result.breakpoints

        if (breakpoint[Breakpoints.XSmall]) {
          return Responsive.HANDSET
        } else if (breakpoint[Breakpoints.Small]) {
          return Responsive.TABLET
        } else return Responsive.DESKTOP
      }),
    )

  public width = toSignal(this.responsive$, {
    initialValue: Responsive.DESKTOP,
  })
}
