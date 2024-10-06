import { Component, inject, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FooterComponent } from '@core/widgets/footer/footer.component'
import { HeaderComponent } from '@core/widgets/header/header.component'
import { PrimeNGConfig } from 'primeng/api'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private primengConfig: PrimeNGConfig = inject(PrimeNGConfig)

  ngOnInit() {
    this.primengConfig.setTranslation({
      accept: 'Accept',
      reject: 'Cancel',
      monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Cентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      dayNamesMin: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    })
  }
}
