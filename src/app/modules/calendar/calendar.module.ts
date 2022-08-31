import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import {calendarRoutes} from './calendar.routing';
import {BoxElementsModule} from '../../shared/modules/box-elements/box-elements.module';
import {CalendarElementsModule} from '../../shared/modules/calendar-elements/calendar-elements.module';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    calendarRoutes,
    BoxElementsModule,
    CalendarElementsModule
  ]
})
export class CalendarModule { }
