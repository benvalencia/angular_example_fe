import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarBaseComponent } from './calendar-base/calendar-base.component';
import {CalendarModule} from 'angular-calendar';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CalendarBaseComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule
  ],
  exports: [
    CalendarBaseComponent
  ]
})

export class CalendarElementsModule { }
