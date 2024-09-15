import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { MainNews, SearchPublicationsResult } from './publications.interface'
import { mainNewsList, searchResultsList } from './publications'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable()
export class PublicationsService {
  private fetchMainNews(): Observable<MainNews[]> {
    return of(mainNewsList)
  }

  private fetchSearchResults(): Observable<SearchPublicationsResult[]> {
    return of(searchResultsList)
  }

  public mainNewsList = toSignal(this.fetchMainNews(), { initialValue: [] })
  public searchResultsList = toSignal(this.fetchSearchResults(), {
    initialValue: [],
  })
}
