import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {IncomesComponent} from './incomes/incomes.component';
import {OverviewComponent} from './overview/overview.component';
import {BankingComponent} from './banking/banking.component';

const WALLET_ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/app/wallet',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
        pathMatch: 'full'
      },
      {
        path: 'expenses',
        component: ExpensesComponent,
        pathMatch: 'full'
      },
      {
        path: 'incomes',
        component: IncomesComponent,
        pathMatch: 'full'
      },
      {
        path: 'banking',
        component: BankingComponent,
        pathMatch: 'full'
      },
    ]
  },
];

export const walletRoutes = RouterModule.forChild(WALLET_ROUTES);
