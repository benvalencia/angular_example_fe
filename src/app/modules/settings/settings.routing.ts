import { RouterModule, Routes } from '@angular/router';
import {SettingsComponent} from './settings/settings.component';

const SETTINGS_ROUTES: Routes = [
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
    component: SettingsComponent,
    // pathMatch: 'full'
  },
];

export const settingsRoutes = RouterModule.forChild(SETTINGS_ROUTES);
