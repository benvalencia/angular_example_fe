import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';

const CALENDAR_ROUTES: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/app/profile',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '',
  //   component: ProfileComponent
  // },
  {
    path: '',
    component: CalendarComponent,
    // pathMatch: 'full'
  },
];

export const calendarRoutes = RouterModule.forChild(CALENDAR_ROUTES);
