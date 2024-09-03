import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProjectsFileComponent } from './projects-file.component'

const routes: Routes = [{ path: '', component: ProjectsFileComponent }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsFileRoutingModule {}
