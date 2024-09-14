import { Injectable } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { Observable, of } from 'rxjs'

import { meetups, questions, servicesFinancing } from './services'
import type { Meetup, Question, ServicesFinancing } from './services.interface'

@Injectable()
export class ServicesService {
  private fetchMeetups(): Observable<Meetup[]> {
    return of(meetups)
  }

  private fetchFinancing(): Observable<ServicesFinancing> {
    return of(servicesFinancing)
  }

  private fetchQuestions(): Observable<Question[]> {
    return of(questions)
  }

  public meetups = toSignal(this.fetchMeetups(), { initialValue: [] })
  public servicesFinancing = toSignal(this.fetchFinancing(), {
    initialValue: { content: '' },
  })
  public questions = toSignal(this.fetchQuestions(), { initialValue: [] })
}
