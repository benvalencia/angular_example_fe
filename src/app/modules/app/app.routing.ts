import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../../core/services/auth-guard.service';
import { NotAllowedComponent } from '../error/not-allowed/not-allowed.component';
import { NotFoundComponent } from '../error/not-found/not-found.component';
// import { RoleGuardService as RoleGuard } from '../services/role-guard.service';

import { AppComponent } from './app/app.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/app/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(module => module.DashboardModule),
        data: { preload: true }
      },
      // {
      //   path: 'settings',
      //   loadChildren: '../settings/settings.module#SettingsModule',
      //   // canActivate: [RoleGuard],
      //   data: {
      //     preload: true,
      //     // expectedRole: 'admin'
      //   }
      // },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(module => module.ProfileModule),
        data: { preload: true }
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(module => module.SettingsModule),
        data: { preload: true }
      },
      {
        path: 'calendar',
        loadChildren: () => import('../calendar/calendar.module').then(module => module.CalendarModule),
        data: { preload: true }
      },
      {
        path: 'company',
        loadChildren: () => import('../company/company.module').then(module => module.CompanyModule),
        data: { preload: true }
      },
      {
        path: 'clients',
        loadChildren: () => import('../clients/clients.module').then(module => module.ClientsModule),
        data: { preload: true }
      },
      {
        path: 'wallet',
        loadChildren: () => import('../wallet/wallet.module').then(module => module.WalletModule),
        data: { preload: true },
      },
      // {
      //   path: 'work',
      //   loadChildren: '../work/work.module#WorkModule',
      //   data: { preload: true }
      // },
      // {
      //   path: 'travel',
      //   loadChildren: '../travel/travel.module#TravelModule',
      //   data: { preload: true }
      // },
      // {
      //   path: 'expenses',
      //   loadChildren: '../expenses/expenses.module#ExpensesModule',
      //   data: { preload: true }
      // },
      // {
      //   path: 'purchases',
      //   loadChildren: '../purchases/purchases.module#PurchasesModule',
      //   data: { preload: true }
      // },
      // {
      //   path: 'reports',
      //   loadChildren: '../reports/reports.module#ReportsModule',
      //   canActivate: [RoleGuard],
      //   data: {
      //     preload: true,
      //     expectedRole: ['manager', 'projectManager']
      //   }
      // }
    ],
    canActivate: [AuthGuardService]
  },
  {
    path: 'not-allowed',
    component: NotAllowedComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuardService]
  }
];

export const appRoutes = RouterModule.forChild(ROUTES);
