import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { MPCard } from './market-participant.interface'
import { toSignal } from '@angular/core/rxjs-interop'
import { mpCards } from './market-participant'

@Injectable()
export class MarketParticipantService {
  private fetchMPCard(): Observable<MPCard[]> {
    return of(mpCards)
  }

  public mpCards = toSignal(this.fetchMPCard(), { initialValue: [] })
}
