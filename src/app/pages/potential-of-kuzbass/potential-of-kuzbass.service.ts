import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { regionAdvantages } from './potential-of-kuzbass'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable()
export class PotentialOfKuzbassService {
  private fetchRegionAdvantages(): Observable<string[]> {
    return of(regionAdvantages)
  }

  public regionAdvantages = toSignal(this.fetchRegionAdvantages(), {
    initialValue: [],
  })
}
