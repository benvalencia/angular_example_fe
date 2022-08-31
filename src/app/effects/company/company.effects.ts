import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import * as companyActions from '../../actions/company/company.actions';
import { map, switchMap } from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {CompanyService} from '../../services/company/company.service';

@Injectable()
export class CompanyEffects {

  constructor(
    private actions$: Actions,
    private companyService: CompanyService,
  ) {}

  // [ GET ] GET COMPANY ADMIN LIST
  
  getCompanyAdminList$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<companyActions.GetCompanyAdminList>(companyActions.CompanyActionType.GET_COMPANY_ADMIN_LIST),
    switchMap(() => {
      return this.companyService
        .getCompanyAdminList()
        .pipe(
          map((contact) => {
            console.log(contact);
            return new companyActions.GetCompanyAdminListSuccess(contact);
          }),
          // catchError((error: any) => {
          //   return new authenticationActions.SignInFail({error});
          // })
        );
    })
  ), {dispatch: true});
  
  getCompanyAdminListSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<companyActions.GetCompanyAdminListSuccess>(companyActions.CompanyActionType.GET_COMPANY_ADMIN_LIST_SUCCESS),
    map((action: any) => {
      return action;
    })
  ), {dispatch: false});
}
