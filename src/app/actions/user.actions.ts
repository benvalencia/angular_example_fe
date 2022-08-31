import {Action} from '@ngrx/store';

export enum UserActionType {
  // GET USER
  GET_USER_BY_ID = '[User] Get User By Id ',
  GET_USER_BY_ID_SUCCESS = '[User] Get User By Id Success',
  GET_USER_BY_ID_FAIL = '[User] Get User By Id Fail',
  GET_USER_BY_TOKEN = '[User] Get User By Token',
  GET_USER_BY_TOKEN_SUCCESS = '[User] Get User By Token Success',
  GET_USER_BY_TOKEN_FAIL = '[User] Get User By Token Fail',
  // UPDATE USER
  UPDATE_USER = '[User] Update User',
  UPDATE_USER_SUCCESS = '[User] Update User Success',
  UPDATE_USER_FAIL = '[User] Update User Fail',
  // SOFT-DELETE USER
  SOFT_DELETE_USER = '[User] Soft Delete User',
  SOFT_DELETE_USER_SUCCESS = '[User] Soft Delete User Success',
  SOFT_DELETE_USER_FAIL = '[User] Soft Delete User Fail',
  // DELETE USER
  DELETE_USER = '[User] Delete User',
  DELETE_USER_SUCCESS = '[User] Delete User Success',
  DELETE_USER_FAIL = '[User] Delete User Fail',
}

// GET USER BY ID
export class GetUserById implements Action {
  readonly type = UserActionType.GET_USER_BY_ID;
  // TODO: Change the payload type into ID entity
  constructor(public payload: any) {}
}
export class GetUserByIdSuccess implements Action {
  readonly type = UserActionType.GET_USER_BY_ID_SUCCESS;
  // TODO: Change the payload type into ID entity
  constructor(public payload: any) {}
}
export class GetUserByIdFail implements Action {
  readonly type = UserActionType.GET_USER_BY_ID_FAIL;
  // TODO: Change the payload type into ID entity
  constructor(public payload: any) {}
}

// GET USER BY TOKEN
export class GetUserByToken implements Action {
  readonly type = UserActionType.GET_USER_BY_TOKEN;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class GetUserByTokenSuccess implements Action {
  readonly type = UserActionType.GET_USER_BY_TOKEN_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class GetUserByTokenFail implements Action {
  readonly type = UserActionType.GET_USER_BY_TOKEN_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}

// UPDATE USER
export class UpdateUser implements Action {
  readonly type = UserActionType.UPDATE_USER;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {
    console.log('update user action', payload);
  }
}
export class UpdateUserSuccess implements Action {
  readonly type = UserActionType.UPDATE_USER_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class UpdateUserFail implements Action {
  readonly type = UserActionType.UPDATE_USER_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}

// SOFT DELETE USER
export class SoftDeleteUser implements Action {
  readonly type = UserActionType.SOFT_DELETE_USER;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class SoftDeleteUserSuccess implements Action {
  readonly type = UserActionType.SOFT_DELETE_USER_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class SoftDeleteUserFail implements Action {
  readonly type = UserActionType.SOFT_DELETE_USER_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}

// DELETE USER
export class DeleteUser implements Action {
  readonly type = UserActionType.DELETE_USER;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class DeleteUserSuccess implements Action {
  readonly type = UserActionType.DELETE_USER_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class DeleteUserFail implements Action {
  readonly type = UserActionType.DELETE_USER_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}


export type Actions =
  GetUserById | GetUserByIdSuccess | GetUserByIdFail |
  GetUserByToken | GetUserByTokenSuccess | GetUserByTokenFail |
  UpdateUser | UpdateUserSuccess | UpdateUserFail|
  SoftDeleteUser | SoftDeleteUserSuccess | SoftDeleteUserFail|
  DeleteUser | DeleteUserSuccess | DeleteUserFail;
