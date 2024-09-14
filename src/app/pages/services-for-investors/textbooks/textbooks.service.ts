import { Injectable } from '@angular/core'
import { textbooksList } from './textbooks'
import { Observable, of } from 'rxjs'
import { toSignal } from '@angular/core/rxjs-interop'

@Injectable()
export class TextbooksService {
  private fetchTextbooksList(): Observable<typeof textbooksList> {
    return of(textbooksList)
  }

  public textbooksList = toSignal(this.fetchTextbooksList(), {
    initialValue: [],
  })
}
