import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import type { MPCard, Participant } from '../market-participant.interface'
import { mpCard, participantData } from '../market-participant'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable()
export class ParticipantService {
  private fetchPariticipantData(): Observable<Participant> {
    return of(participantData)
  }

  private fetchParticipantCard(): Observable<MPCard> {
    return of(mpCard)
  }

  public partData = toSignal(this.fetchPariticipantData(), {
    initialValue: {} as Participant,
  })

  public partCard = toSignal(this.fetchParticipantCard(), {
    initialValue: {} as MPCard,
  })
}
