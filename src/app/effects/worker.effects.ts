import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import * as workerActions from '../actions/worker.actions';
import { map, switchMap } from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {WorkerService} from '../services/worker.service';

@Injectable()
export class WorkerEffects {

  constructor(
    private actions$: Actions,
    private workerService: WorkerService,
  ) {}

  // [ GET ] GET WORKER LIST
  
  getWorkerList$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<workerActions.GetWorkerList>(workerActions.WorkerActionType.GET_WORKER_LIST),
    switchMap(() => {
      return this.workerService
        .getWorkerList()
        .pipe(
          map((contact) => {
            return new workerActions.GetWorkerListSuccess(contact);
          }),
          // catchError((error: any) => {
          //   return new authenticationActions.SignInFail({error});
          // })
        );
    })
  ), {dispatch: true});
  
  getWorkerListSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<workerActions.GetWorkerListSuccess>(workerActions.WorkerActionType.GET_WORKER_LIST_SUCCESS),
    map((action: any) => {
      return action;
    })
  ), {dispatch: false});

  // [ POST ] POST WORKER CREATE
  
  postWorkerCreate$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<workerActions.PostWorkerCreate>(workerActions.WorkerActionType.POST_WORKER_CREATE),
    switchMap((action) => {
      return this.workerService
        .createWorker(action.payload)
        .pipe(
          map((contact) => {
            return new workerActions.PostWorkerCreateSuccess(contact);
          }),
          // catchError((error: any) => {
          //   return new authenticationActions.SignInFail({error});
          // })
        );
    })
  ), {dispatch: true});
  
  postWorkerCreateSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<workerActions.PostWorkerCreateSuccess>(workerActions.WorkerActionType.POST_WORKER_CREATE_SUCCESS),
    map((action: any) => {
      return action;
    })
  ), {dispatch: false});
}
