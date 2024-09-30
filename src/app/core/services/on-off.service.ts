import { Injectable, signal } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class OnOffService {
  public burgerState = signal<boolean>(false)

  public setBurgerState(state: boolean) {
    this.burgerState.set(state)
  }
}
