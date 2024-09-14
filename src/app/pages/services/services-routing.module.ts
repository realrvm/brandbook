import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ServicesComponent } from './services.component'
import { ServicesService } from './services.service'

const routes: Routes = [
  { path: '', providers: [ServicesService], component: ServicesComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
