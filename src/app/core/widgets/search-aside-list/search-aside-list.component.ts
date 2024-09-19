import { Component, input } from '@angular/core'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import { CheckboxModule } from 'primeng/checkbox'

export interface SearchTemplateItem {
  id: number
  name: string
}

@Component({
  selector: 'bb-search-aside-list',
  standalone: true,
  imports: [CheckboxModule, FormsModule, ReactiveFormsModule],
  templateUrl: './search-aside-list.component.html',
  styleUrl: './search-aside-list.component.scss',
})
export class SearchAsideListComponent {
  public title = input.required<string>()
  public searchItems = input.required<SearchTemplateItem[]>()

  public form = new FormGroup({
    checked: new FormControl<boolean>(false),
    checked1: new FormControl<boolean>(false),
  })
}
