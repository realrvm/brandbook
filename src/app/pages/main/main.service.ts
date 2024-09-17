import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { MarketParticipant, ProjectFile, Service } from './main.interface'
import { marketParticipantsList, projectsFileList, servicesList } from './main'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable()
export class MainService {
  private fetchServices(): Observable<Service[]> {
    return of(servicesList)
  }

  private fetchMarketParticipants(): Observable<MarketParticipant[]> {
    return of(marketParticipantsList)
  }

  private fetchProjectFiles(): Observable<ProjectFile[]> {
    return of(projectsFileList)
  }

  public services = toSignal(this.fetchServices(), { initialValue: [] })
  public marketParticipants = toSignal(this.fetchMarketParticipants(), {
    initialValue: [],
  })
  public projectFiles = toSignal(this.fetchProjectFiles(), { initialValue: [] })
}
