import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { industries, regions } from './search-template'
import { toSignal } from '@angular/core/rxjs-interop'
import { SearchTemplateItem } from '@core/widgets/search-aside-list/search-aside-list.component'

@Injectable()
export class SearchTemplateService {
  private fetchRegions(): Observable<SearchTemplateItem[]> {
    return of(regions)
  }

  private fetchIndustries(): Observable<SearchTemplateItem[]> {
    return of(industries)
  }

  public regionsList = toSignal(this.fetchRegions(), { initialValue: [] })
  public industriesList = toSignal(this.fetchIndustries(), { initialValue: [] })
}
