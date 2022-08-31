import {Action} from '@ngrx/store';

export enum CompanyActionType {
  // GET COMPANY ADMIN LIST
  GET_COMPANY_ADMIN_LIST = '[Company] Get Company Admin List ',
  GET_COMPANY_ADMIN_LIST_SUCCESS = '[Company] Get Company Admin List Success',
  GET_COMPANY_ADMIN_LIST_FAIL = '[Company] Get Company Admin List Fail',
}

// GET COMPANY ADMIN LIST
export class GetCompanyAdminList implements Action {
  readonly type = CompanyActionType.GET_COMPANY_ADMIN_LIST;
  constructor() {}
}
export class GetCompanyAdminListSuccess implements Action {
  readonly type = CompanyActionType.GET_COMPANY_ADMIN_LIST_SUCCESS;
  // TODO: Change the payload type into ID entity
  constructor(public payload: any) {}
}
export class GetCompanyAdminListFail implements Action {
  readonly type = CompanyActionType.GET_COMPANY_ADMIN_LIST_FAIL;
  // TODO: Change the payload type into ID entity
  constructor(public payload: any) {}
}

export type Actions =
  GetCompanyAdminList | GetCompanyAdminListSuccess | GetCompanyAdminListFail;
