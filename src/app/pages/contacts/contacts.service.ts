import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { contacts } from './contacts'
import { toSignal } from '@angular/core/rxjs-interop'

type Contacts = typeof contacts

@Injectable()
export class ContactsService {
  private fetchContacts(): Observable<Contacts> {
    return of(contacts)
  }

  public contacts = toSignal(this.fetchContacts(), {
    initialValue: {
      title: '',
      address: '',
      email: '',
      phone: '',
      www: '',
    },
  })
}
