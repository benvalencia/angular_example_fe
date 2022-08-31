import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {AuthGuardService} from './auth-guard.service';
import {UserEntity} from '../entities/user.entity';

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(
    public authentication: AuthenticationService,
    public authGuard: AuthGuardService,
    public router: Router
  ) {}

  /**
   * Check if the user can activate the given route.
   * If JWT tokens are implemented in the API, this is where they should be checked.
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    console.log(route.data.expectedRole);
    const expectedRoles =
      route.data.expectedRole instanceof Array
        ? route.data.expectedRole
        : [route.data.expectedRole];
    const passRoles: any[] = [];
    const me: UserEntity = this.authGuard.authorized();

    if (!me) {
      this.router.navigate(['/auth/login'], { queryParams: route.queryParams })
        .then();
      return false;
    }

    checkRoles(expectedRoles);

    if (passRoles.some((pass) => pass === true)) {
      return true;
    } else {
      this.router.navigate(['/site/not-allowed'], { queryParams: { return: state.url }})
        .then();
      return false;
    }

    // local functions

    function checkRoles(role): void {
      console.log(role);
      if (role instanceof Array) {
        role.forEach((child) => checkRoles(child));
      } else if (typeof role === 'string') {
        checkRole(role);
      }
    }

    function checkRole(role): void {
      console.log(role);
      // check role guard
      switch (role) {
        case 'admin':
          passRoles.push(me.role.isAdmin);
          break;
        case 'manager':
          passRoles.push(me.role.isManager);
          break;
        case 'projectManager':
          passRoles.push(me.role.isProjectManager);
          break;
        case 'expenseAdmin':
          passRoles.push(me.role.isExpenseAdmin);
          break;
        case 'purchaseAdmin':
          passRoles.push(me.role.isPurchaseAdmin);
          break;
        default:
          passRoles.push(true);
      }
    }
  }
}
