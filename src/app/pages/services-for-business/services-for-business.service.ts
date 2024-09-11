import { Injectable } from '@angular/core'
import { businessServices } from './services-for-business'
import { Observable, of } from 'rxjs'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable({
  providedIn: 'root',
})
export class ServicesForBusinessService {
  private fetchBusinessServices(): Observable<typeof businessServices> {
    return of(businessServices)
  }

  public businessServices = toSignal(this.fetchBusinessServices(), {
    initialValue: [],
  })
}
