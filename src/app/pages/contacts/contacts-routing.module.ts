import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ContactsComponent } from './contacts.component'
import { ContactsService } from './contacts.service'

const routes: Routes = [
  { path: '', providers: [ContactsService], component: ContactsComponent },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
