import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import * as userActions from '../actions/user.actions';
import { map, switchMap } from 'rxjs/operators';
import {webStorage} from '../core/utils/webstorage';
import {Action} from '@ngrx/store';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Injectable()
export class UserEffects {

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private router: Router
  ) {}

  // [ GET ] GET USER BY ID
  getUserById$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<userActions.GetUserById>(userActions.UserActionType.GET_USER_BY_ID),
    switchMap((action: userActions.GetUserById) => {
      return this.userService
        .getUserById(action.payload.id)
        .pipe(
          map((user) => {
            return new userActions.GetUserByIdSuccess(user);
          }),
          // catchError((error: any) => {
          //   return new authenticationActions.SignInFail({error});
          // })
        );
    })
  ), {dispatch: true});

  getUserByIdSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<userActions.GetUserByIdSuccess>(userActions.UserActionType.GET_USER_BY_ID_SUCCESS),
    map((action: any) => {
      webStorage.user = action.payload.user;
      return action;
    })
  ), {dispatch: false});

  // [ GET ] GET USER BY TOKEN
  getUserByToken$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<userActions.GetUserByToken>(userActions.UserActionType.GET_USER_BY_TOKEN),
    switchMap(() => {
      return this.userService
        .getUserByToken()
        .pipe(
          map((user) => {
            return new userActions.GetUserByTokenSuccess(user);
          }),
          // catchError((error: any) => {
          //   return new authenticationActions.SignInFail({error});
          // })
        );
    })
  ), {dispatch: true});

  getUserByTokenSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<userActions.GetUserByTokenSuccess>(userActions.UserActionType.GET_USER_BY_TOKEN_SUCCESS),
    map((action: any) => {
      webStorage.user = action.payload.user;
      return action;
    })
  ), {dispatch: false});

  // [ UPDATE ] UPDATE USER

  updateUser$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<userActions.UpdateUser>(userActions.UserActionType.UPDATE_USER),
    switchMap((action: userActions.UpdateUser) => {
      return this.userService
        .updateUser(action.payload)
        .pipe(
          map((user) => {
            return new userActions.UpdateUserSuccess(user);
          }),
          // catchError((error: any) => {
          //   return new authenticationActions.SignInFail({error});
          // })
        );
    })
  ), {dispatch: true});

  updateUserSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<userActions.UpdateUserSuccess>(userActions.UserActionType.UPDATE_USER_SUCCESS),
    map((action: any) => {
      webStorage.user = action.payload.user;
      return action;
    })
  ), {dispatch: false});


  // @Effect() signIn$: Observable<SignInFail | void> = this.actions$.pipe(
  //   ofType<authenticationActions.SignIn>(
  //     authenticationActions.AuthenticationActionType.SIGN_IN
  //   ),
  //   mergeMap((action: signIn$) =>
  //     this.authenticationService.signIn(action.payload.username, action.payload.password).pipe(
  //       map(res => console.log(res)),
  //       catchError(err => of(new authenticationActions.SignInFail(err)))
  //     )
  //   ));

  // @Effect() signUp$: Observable<SignUpFail | void> = this.actions$.pipe(
  //   ofType<authenticationActions.SignUp>(
  //     authenticationActions.AuthenticationActionType.SIGN_UP
  //   ),
  //   mergeMap((actions: authenticationActions.SignUp) =>
  //     this.authenticationService.signUp('as','as','as','as','as').pipe(
  //       map(res => console.log(res)),
  //       catchError(err => of(new authenticationActions.SignUpFail(err)))
  //     )
  //   ));
}
