import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutComponent } from './about.component'
import { AboutService } from './about.service'

const routes: Routes = [
  { path: '', providers: [AboutService], component: AboutComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule {}
