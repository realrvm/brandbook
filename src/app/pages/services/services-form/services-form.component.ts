import { Component } from '@angular/core'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext'
import { CheckboxModule } from 'primeng/checkbox'
import { IconButtonComponent } from '@core/shared/ui/buttons/icon-button/icon-button.component'
import { InputTextareaModule } from 'primeng/inputtextarea'

@Component({
  selector: 'bb-services-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    IconButtonComponent,
    InputTextModule,
    CheckboxModule,
    InputTextareaModule,
  ],
  template: `
    <section class="mb-[76px]">
      <h3 class="text-[24px] font-semibold mb-3">Задать вопрос</h3>
      <div class="h-1.5 max-w-[169px] bg-blue mb-16"></div>
      <div class="w-full max-w-[813px] rounded-2xl overflow-hidden">
        <form
          [formGroup]="form"
          class="w-full bg-light-grey flex flex-col p-6 tablet:p-10 desktop:p-10"
        >
          <input
            type="text"
            pInputText
            formControlName="fullName"
            placeholder="ФИО"
            class="bg-bkgrnd rounded-md border border-grey-strok py-5 px-3 w-full tablet:max-w-[358px] desktop:max-w-[358px] h-12 mb-4"
          />
          <div class="flex handset:flex-col gap-4 justify-between mb-6">
            <input
              type="text"
              pInputText
              formControlName="email"
              placeholder="Ваш e-mail"
              class="bg-bkgrnd rounded-md border border-grey-strok py-5 px-3 w-full tablet:max-w-[358px] desktop:max-w-[358px] h-12"
            />
            <input
              type="text"
              pInputText
              formControlName="phone"
              placeholder="Телефон"
              class="bg-bkgrnd rounded-md border border-grey-strok py-5 px-3 w-full tablet:max-w-[358px] desktop:max-w-[358px] h-12"
            />
          </div>
          <textarea
            pInputTextarea
            formControlName="question"
            placeholder="Ваш вопрос"
            class="bg-bkgrnd rounded-md border border-grey-strok py-5 px-3 w-full min-h-[180px] max-h-[358px] mb-12"
          ></textarea>
          <div
            class="flex handset:flex-col tablet:items-center desktop:items-center justify-between handset:gap-3"
          >
            <div class="flex items-center gap-2">
              <p-checkbox formControlName="agree" value="true" />
              <span class="text-[10px] text-grey-indicator"
                >Соглашаюсь с
                <a href="/privacy-policy" class="text-blue"
                  >политикой конфиденциальности</a
                ></span
              >
            </div>
            <bb-icon-button
              icon="send"
              className="handset:w-full bg-orange text-white hover:bg-active-orange h-10"
              label="Отправить"
            />
          </div>
        </form>
      </div>
    </section>
  `,
  styles: `
    :host {
      @apply block;

      ::ng-deep .p-checkbox-box {
        @apply border border-grey-strok;
      }

      ::ng-deep .p-checkbox-box.p-highlight {
        @apply border border-transparent bg-orange;
      }

      ::ng-deep .p-checkbox-box.p-focus {
        @apply shadow-none border border-orange;
      }

      ::ng-deep .p-inputtext,
      ::ng-deep .p-inputtextarea {
        @apply border border-grey-strok;
      }

      ::ng-deep .p-inputtext:focus,
      ::ng-deep .p-inputtextarea:focus {
        @apply border border-orange;
      }
    }
  `,
})
export class ServicesFormComponent {
  public form = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    question: new FormControl(''),
    agree: new FormControl(false),
  })
}
