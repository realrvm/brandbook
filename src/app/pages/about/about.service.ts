import { Injectable } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { Observable, of } from 'rxjs'
import { aboutText } from './about'

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  //TODO: use a real API
  private fetchAboutText(): Observable<string[]> {
    return of(aboutText)
  }

  public aboutText = toSignal(this.fetchAboutText())
}
