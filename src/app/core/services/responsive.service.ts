import { inject, Injectable } from '@angular/core'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
import { toSignal } from '@angular/core/rxjs-interop'
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ResponsiveService {
  private breakpointObserver = inject(BreakpointObserver)

  private responsive$ = this.breakpointObserver
    .observe(Breakpoints.Web)
    .pipe(map((w) => w.matches))

  public isWebWidth = toSignal(this.responsive$, { initialValue: false })
}
