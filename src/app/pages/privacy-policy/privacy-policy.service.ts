import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { privacyPolicy } from './privacy-policy'
import { toSignal } from '@angular/core/rxjs-interop'

type PrivacyPolicy = typeof privacyPolicy

@Injectable()
export class PrivacyPolicyTsService {
  private fetchPrivacyPolicy(): Observable<PrivacyPolicy> {
    return of(privacyPolicy)
  }

  public privacyPolicy = toSignal(this.fetchPrivacyPolicy(), {
    initialValue: {} as PrivacyPolicy,
  })
}
