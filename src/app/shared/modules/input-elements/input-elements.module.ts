import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';
import { SelectComponent } from './select/select.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import {CalendarModule} from 'primeng/calendar';
import { InputAutocompleteComponent } from './input-autocomplete/input-autocomplete.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
// import { InputControlDirective } from './input-control.directive';


@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    DatePickerComponent,
    InputAutocompleteComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    CalendarModule,
    AutoCompleteModule,
  ],
  exports: [
    InputComponent,
    SelectComponent,
    DatePickerComponent,
    InputAutocompleteComponent
  ]
})
export class InputElementsModule { }
