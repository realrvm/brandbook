import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { HosCard } from './history-of-success.interface'
import { hosCards } from './history-of-success'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable()
export class HistoryOfSuccessService {
  private fetchHosCards(): Observable<HosCard[]> {
    return of(hosCards)
  }

  public hosCards = toSignal(this.fetchHosCards(), { initialValue: [] })
}
