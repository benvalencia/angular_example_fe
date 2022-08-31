import {Action} from '@ngrx/store';

export enum ContactActionType {
  // GET CONTACT LIST
  GET_CONTACT_LIST = '[Contact] Get Contact List ',
  GET_CONTACT_LIST_SUCCESS = '[Contact] Get Contact List Success',
  GET_CONTACT_LIST_FAIL = '[Contact] Get Contact List Fail',
  // GET CONTACT COUNTER
  GET_CONTACT_COUNTER = '[Contact] Get Contact Counter ',
  GET_CONTACT_COUNTER_SUCCESS = '[Contact] Get Contact Counter Success',
  GET_CONTACT_COUNTER_FAIL = '[Contact] Get Contact Counter Fail',
  // POST CONTACT CREATE
  POST_CONTACT_CREATE = '[Contact] Post Contact Create ',
  POST_CONTACT_CREATE_SUCCESS = '[Contact] Post Contact Create Success',
  POST_CONTACT_CREATE_FAIL = '[Contact] Post Contact Create Fail',
}

// GET CONTACT LIST
export class GetContactList implements Action {
  readonly type = ContactActionType.GET_CONTACT_LIST;
  constructor() {}
}
export class GetContactListSuccess implements Action {
  readonly type = ContactActionType.GET_CONTACT_LIST_SUCCESS;
  // TODO: Change the payload type into ID entity
  constructor(public payload: any) {}
}
export class GetContactListFail implements Action {
  readonly type = ContactActionType.GET_CONTACT_LIST_FAIL;
  // TODO: Change the payload type into ID entity
  constructor(public payload: any) {}
}

// GET CONTACT COUNTER
export class GetContactCounter implements Action {
  readonly type = ContactActionType.GET_CONTACT_COUNTER;
  constructor() {}
}
export class GetContactCounterSuccess implements Action {
  readonly type = ContactActionType.GET_CONTACT_COUNTER_SUCCESS;
  // TODO: Change the payload type into ID entity
  constructor(public payload: any) {}
}
export class GetContactCounterFail implements Action {
  readonly type = ContactActionType.GET_CONTACT_COUNTER_FAIL;
  // TODO: Change the payload type into ID entity
  constructor(public payload: any) {}
}

// POST CONTACT CREATE
export class PostContactCreate implements Action {
  readonly type = ContactActionType.POST_CONTACT_CREATE;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class PostContactCreateSuccess implements Action {
  readonly type = ContactActionType.POST_CONTACT_CREATE_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class PostContactCreateFail implements Action {
  readonly type = ContactActionType.POST_CONTACT_CREATE_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}


export type Actions =
  GetContactList | GetContactListSuccess | GetContactListFail |
  GetContactCounter | GetContactCounterSuccess | GetContactCounterFail |
  PostContactCreate | PostContactCreateSuccess | PostContactCreateFail;
