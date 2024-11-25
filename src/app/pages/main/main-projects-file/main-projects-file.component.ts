import { CommonModule, NgOptimizedImage } from '@angular/common'
import { Component, inject } from '@angular/core'
import { MainSectionComponent } from '../main-section/main-section.component'
import { MainService } from '../main.service'

@Component({
  selector: 'bb-main-projects-file',
  standalone: true,
  imports: [CommonModule, MainSectionComponent, NgOptimizedImage],
  templateUrl: './main-projects-file.component.html',
  styleUrl: './main-projects-file.component.scss',
})
export class MainProjectsFileComponent {
  private mainService = inject(MainService)

  public title = 'Картотека проектов'
  public hasSwitch = true

  public projects = this.mainService.projectFiles
}
