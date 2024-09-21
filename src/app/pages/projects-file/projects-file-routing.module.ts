import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ProjectsFileComponent } from './projects-file.component'
import { ProjectsFileService } from './projects-file.service'
import { ProjectComponent } from './project/project.component'
import { ProjectService } from './project/project.service'

const routes: Routes = [
  {
    path: '',
    providers: [ProjectsFileService, ProjectService],
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: ProjectsFileComponent },
      { path: 'project/:id', component: ProjectComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsFileRoutingModule {}
