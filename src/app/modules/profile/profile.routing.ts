import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const PROFILE_ROUTES: Routes = [
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
    component: ProfileComponent,
    // pathMatch: 'full'
  },
];

export const profileRoutes = RouterModule.forChild(PROFILE_ROUTES);
