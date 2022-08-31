import {Action} from '@ngrx/store';

export enum WorkerActionType {
  // GET CONTACT LIST
  GET_WORKER_LIST = '[Worker] Get Worker List ',
  GET_WORKER_LIST_SUCCESS = '[Worker] Get Worker List Success',
  GET_WORKER_LIST_FAIL = '[Worker] Get Worker List Fail',
  // POST CONTACT CREATE
  POST_WORKER_CREATE = '[Worker] Post Worker Create ',
  POST_WORKER_CREATE_SUCCESS = '[Worker] Post Worker Create Success',
  POST_WORKER_CREATE_FAIL = '[Worker] Post Contact Create Fail',
}

// GET WORKER LIST
export class GetWorkerList implements Action {
  readonly type = WorkerActionType.GET_WORKER_LIST;
  constructor() {}
}
export class GetWorkerListSuccess implements Action {
  readonly type = WorkerActionType.GET_WORKER_LIST_SUCCESS;
  // TODO: Change the payload type into ID entity
  constructor(public payload: any) {}
}
export class GetWorkerListFail implements Action {
  readonly type = WorkerActionType.GET_WORKER_LIST_FAIL;
  // TODO: Change the payload type into ID entity
  constructor(public payload: any) {}
}

// POST WORKER CREATE
export class PostWorkerCreate implements Action {
  readonly type = WorkerActionType.POST_WORKER_CREATE;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class PostWorkerCreateSuccess implements Action {
  readonly type = WorkerActionType.POST_WORKER_CREATE_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class PostWorkerCreateFail implements Action {
  readonly type = WorkerActionType.POST_WORKER_CREATE_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}


export type Actions =
  GetWorkerList | GetWorkerListSuccess | GetWorkerListFail |
  PostWorkerCreate | PostWorkerCreateSuccess | PostWorkerCreateFail;
