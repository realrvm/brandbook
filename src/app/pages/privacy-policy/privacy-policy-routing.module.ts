import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PrivacyPolicyComponent } from './privacy-policy.component'
import { PrivacyPolicyTsService } from './privacy-policy.service'

const routes: Routes = [
  {
    path: '',
    providers: [PrivacyPolicyTsService],
    component: PrivacyPolicyComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyPolicyRoutingModule {}
