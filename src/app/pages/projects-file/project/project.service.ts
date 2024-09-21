import { Injectable } from '@angular/core'
import { PFCard } from '../projects-file.interface'
import { Observable, of } from 'rxjs'
import { Participant } from '@pages/market-participant/market-participant.interface'
import { pfCard, projectData } from '../projects-file'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable()
export class ProjectService {
  private fetchProjectData(): Observable<Participant> {
    return of(projectData)
  }

  private fetchProjectCard(): Observable<PFCard> {
    return of(pfCard)
  }

  public partData = toSignal(this.fetchProjectData(), {
    initialValue: {} as Participant,
  })

  public partCard = toSignal(this.fetchProjectCard(), {
    initialValue: {} as PFCard,
  })
}
