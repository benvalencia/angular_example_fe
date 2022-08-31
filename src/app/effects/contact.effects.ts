import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import * as contactActions from '../actions/contact.actions';
import { map, switchMap } from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {ContactService} from '../services/contact.service';

@Injectable()
export class ContactEffects {

  constructor(
    private actions$: Actions,
    private contactService: ContactService,
  ) {}

  // [ GET ] GET CONTACT LIST
  
  getContactList$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<contactActions.GetContactList>(contactActions.ContactActionType.GET_CONTACT_LIST),
    switchMap(() => {
      return this.contactService
        .getContactList()
        .pipe(
          map((contact) => {
            return new contactActions.GetContactListSuccess(contact);
          }),
          // catchError((error: any) => {
          //   return new authenticationActions.SignInFail({error});
          // })
        );
    })
  ), {dispatch: true});
  
  getContactListSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<contactActions.GetContactListSuccess>(contactActions.ContactActionType.GET_CONTACT_LIST_SUCCESS),
    map((action: any) => {
      return action;
    })
  ), {dispatch: false});

  // [ GET ] GET CONTACT COUNTER
  
  getContactCounter$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<contactActions.GetContactCounter>(contactActions.ContactActionType.GET_CONTACT_COUNTER),
    switchMap(() => {
      return this.contactService
        .getContactCounter()
        .pipe(
          map((contact) => {
            return new contactActions.GetContactCounterSuccess(contact);
          }),
          // catchError((error: any) => {
          //   return new authenticationActions.SignInFail({error});
          // })
        );
    })
  ), {dispatch: true});
  
  getContactCounterSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<contactActions.GetContactCounterSuccess>(contactActions.ContactActionType.GET_CONTACT_COUNTER_SUCCESS),
    map((action: any) => {
      return action;
    })
  ), {dispatch: false});

  // [ POST ] POST CONTACT CREATE
  
  postContactCreate$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<contactActions.PostContactCreate>(contactActions.ContactActionType.POST_CONTACT_CREATE),
    switchMap((action) => {
      return this.contactService
        .createContact(action.payload)
        .pipe(
          map((contact) => {
            return new contactActions.PostContactCreateSuccess(contact);
          }),
          // catchError((error: any) => {
          //   return new authenticationActions.SignInFail({error});
          // })
        );
    })
  ), {dispatch: true});
  
  postContactCreateSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<contactActions.PostContactCreateSuccess>(contactActions.ContactActionType.POST_CONTACT_CREATE_SUCCESS),
    map((action: any) => {
      return action;
    })
  ), {dispatch: false});
}
