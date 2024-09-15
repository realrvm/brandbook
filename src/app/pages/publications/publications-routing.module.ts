import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PublicationsComponent } from './publications.component'
import { PublicationsService } from './publications.service'

const routes: Routes = [
  {
    path: '',
    providers: [PublicationsService],
    component: PublicationsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicationsRoutingModule {}
