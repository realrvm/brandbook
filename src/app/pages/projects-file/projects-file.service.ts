import { Injectable } from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { SearchTemplateItem } from '@core/widgets/search-aside-list/search-aside-list.component'
import { Observable, of } from 'rxjs'
import { pfCards, pfIndustries, pfProceeds, pfRegions } from './projects-file'
import { PFCard } from './projects-file.interface'

@Injectable()
export class ProjectsFileService {
  private fetchRegions(): Observable<SearchTemplateItem[]> {
    return of(pfRegions)
  }

  private fetchIndustries(): Observable<SearchTemplateItem[]> {
    return of(pfIndustries)
  }

  private fetchProceeds(): Observable<SearchTemplateItem[]> {
    return of(pfProceeds)
  }

  private fetchPFCard(): Observable<PFCard[]> {
    return of(pfCards)
  }

  public regionsList = toSignal(this.fetchRegions(), { initialValue: [] })
  public industriesList = toSignal(this.fetchIndustries(), { initialValue: [] })
  public proceedsList = toSignal(this.fetchProceeds(), { initialValue: [] })
  public pfCardsList = toSignal(this.fetchPFCard(), { initialValue: [] })
}
