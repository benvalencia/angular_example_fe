import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';

export const AUTHENTICATION_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
      // {
      //   path: 'forgot-password',
      //   component: ForgotPasswordComponent
      // }
    ]
  },
  // {
  //   path: 'login/:vendor',
  //   // outlet: 'third-party-login-splash',
  //   component: ThirdPartyLoginComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'register/:token',
  //   component: ResetPasswordComponent,
  //   data: { firstTime: true }
  // },
  // {
  //   path: 'reset-password/:token',
  //   component: ResetPasswordComponent
  // },
  // {
  //   path: 'reset-password-link-invalid',
  //   component: ResetPasswordLinkInvalidComponent
  // },
  // {
  //   path: 'auth/sync/:vendor',
  //   component: CalendarSyncComponent
  // }
];

export const authRoutes = RouterModule.forChild(AUTHENTICATION_ROUTES);
