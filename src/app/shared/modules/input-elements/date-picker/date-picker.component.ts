import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CalendarModule} from 'primeng/calendar';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Input() label?: string;
  @Input() datepickerDate = new Date();
  @Output() datepickerDateChange = new EventEmitter<Date>();

  // date1: Date | any;
  // date2: Date | any;
  // date4: Date | any;
  // date5: Date | any;
  // date6: Date | any;
  // date7: Date | any;
  // date8: Date | any;
  // date9: Date | any;
  // date10: Date | any;
  // date11: Date | any;
  // date12: Date | any;
  // date13: Date | any;
  // date14: Date | any;
  // dates: Date[] | any;
  // rangeDates: Date[] | any;
  // minDate: Date | any;
  // maxDate: Date | any;
  invalidDates: Array<Date> | any;

  constructor() {
  }

  ngOnInit(): void {
    this.datepickerDate = new Date(this.datepickerDate);

    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const prevMonth = (month === 0) ? 11 : month - 1;
    const prevYear = (prevMonth === 11) ? year - 1 : year;
    const nextMonth = (month === 11) ? 0 : month + 1;
    const nextYear = (nextMonth === 0) ? year + 1 : year;
    // this.minDate = new Date();
    // this.minDate.setMonth(prevMonth);
    // this.minDate.setFullYear(prevYear);
    // this.maxDate = new Date();
    // this.maxDate.setMonth(nextMonth);
    // this.maxDate.setFullYear(nextYear);

    const invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }

  dateIsChanged(): void {
    this.datepickerDateChange.emit(this.datepickerDate);
  }
}
