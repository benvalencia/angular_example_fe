import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpensesComponent } from './expenses/expenses.component';
import { LayoutComponent } from './layout/layout.component';
import { IncomesComponent } from './incomes/incomes.component';
import { BankingComponent } from './banking/banking.component';
import { OverviewComponent } from './overview/overview.component';
import {RouterModule} from '@angular/router';
import {walletRoutes} from './wallet.routing';

@NgModule({
  declarations: [
    LayoutComponent,
    ExpensesComponent,
    IncomesComponent,
    BankingComponent,
    OverviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    walletRoutes
  ]
})
export class WalletModule { }
