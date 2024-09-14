import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { investorServicesCards } from './services-for-investors'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable()
export class ServicesForInvestorsService {
  private fetchInvestorServicesCards(): Observable<
    typeof investorServicesCards
  > {
    return of(investorServicesCards)
  }

  public investorServicesCards = toSignal(this.fetchInvestorServicesCards(), {
    initialValue: [],
  })
}
