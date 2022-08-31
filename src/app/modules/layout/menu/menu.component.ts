import { Component, OnInit } from '@angular/core';
import {AuthGuardService} from '../../../core/services/auth-guard.service';
import {environment} from '../../../../environments/environment';
import {UserEntity} from '../../../core/entities/user.entity';
import {Store} from '@ngrx/store';
import * as userActions from '../../../actions/user.actions';

const DASHBOARD = {
  label: 'menu.dashboard',
  path: '/app/dashboard',
  icon: 'home',
  translate: true,
  enabled: true
};
const CLIENTS = {
  label: 'menu.clients',
  path: '/app/clients',
  icon: 'person',
  translate: true,
  enabled: true
};
const CLIENTS_WORKERS = {
  label: 'menu.clients_workers',
  path: '/app/clients/workers',
  icon: 'person',
  translate: true,
  enabled: true
};
const CLIENTS_USERS = {
  label: 'menu.clients_users',
  path: '/app/clients/users',
  icon: 'person',
  translate: true,
  enabled: true
};
const WALLET = {
  label: 'menu.wallet',
  path: '/app/wallet',
  icon: 'person',
  translate: true,
  enabled: true
};
const WALLET_EXPENSES = {
  label: 'menu.wallet_expenses',
  path: '/app/wallet/expenses',
  icon: 'person',
  translate: true,
  enabled: true
};
const WALLET_INCOMES = {
  label: 'menu.wallet_incomes',
  path: '/app/wallet/incomes',
  icon: 'person',
  translate: true,
  enabled: true
};
const WALLET_BANKING = {
  label: 'menu.wallet_banking',
  path: '/app/wallet/banking',
  icon: 'person',
  translate: true,
  enabled: true
};
const CALENDAR = {
  label: 'menu.calendar',
  path: '/app/calendar',
  icon: 'event',
  translate: true,
  enabled: true
};
const MAIL = {
  label: 'menu.mail',
  path: '/app/settings',
  icon: 'mail',
  translate: true,
  enabled: true
};
const CHAT = {
  label: 'menu.chat',
  path: '/app/chat',
  icon: 'mail',
  translate: true,
  enabled: true
};
const COMPANY = {
  label: 'menu.company',
  path: '/app/company',
  icon: 'person',
  translate: true,
  enabled: true
};
const COMPANY_ADMIN = {
  label: 'menu.company_admin',
  path: '/app/company/admin',
  icon: 'person',
  translate: true,
  enabled: true
};

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  allNavLinks: any[] = [];
  navLinks: any[] = [];
  images = environment.images.identity;

  constructor(
    private authService: AuthGuardService,
    private store: Store,
  ) {
    this.store.dispatch(new userActions.GetUserByToken(
      { token: this.authService.authToken()}
    ));
    const me = this.authService.authorized();
    this.refreshLinks(me);
  }

  ngOnInit(): void {}

  logout(): void {
    this.authService.ejectUser();
  }

  // show only enabled links
  refreshLinks(me: UserEntity): void {
    console.log('test me refreshLinks me -> ', me);

    switch (me.type) {
      case 0:
        DASHBOARD.enabled = true;
        CLIENTS.enabled = true;
        CLIENTS_WORKERS.enabled = true;
        CLIENTS_USERS.enabled = true;
        WALLET.enabled = false;
        WALLET_EXPENSES.enabled = false;
        WALLET_INCOMES.enabled = false;
        WALLET_BANKING.enabled = false;
        CALENDAR.enabled = false;
        MAIL.enabled = false;
        CHAT.enabled = false;
        COMPANY.enabled = true;
        COMPANY_ADMIN.enabled = true;
        break;
    }
    this.allNavLinks = [
      DASHBOARD, CLIENTS, CLIENTS_WORKERS, WALLET,
      WALLET_EXPENSES, WALLET_INCOMES, WALLET_BANKING,
      CALENDAR, MAIL, CHAT, COMPANY, COMPANY_ADMIN
    ];

    this.navLinks = this.allNavLinks.filter((link) => link.enabled === true);
  }
}
