import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {AuthenticationService} from '../services/authentication.service';
import {catchError, Observable, of} from 'rxjs';
import * as authenticationActions from '../actions/authentication.actions';
import * as userActions from '../actions/user.actions';
import { map, switchMap } from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {webStorage} from '../core/utils/webstorage';

@Injectable()
export class AuthenticationEffects {

  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService,
  ) {}

  // NORMAL SIGN IN
  signIn$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<authenticationActions.SignIn>(authenticationActions.AuthenticationActionType.SIGN_IN),
    switchMap((action: authenticationActions.SignIn) => {
      return this.authenticationService
        .signIn(action.payload.username, action.payload.password)
        .pipe(
          map((token) => {
              return new authenticationActions.SignInSuccess({token, remember: action.payload.remember});
          }),
          catchError((error: unknown) => of(new authenticationActions.SignInFail({ error })))
        );
    })
  ), {dispatch: true});

  signInSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authenticationActions.AuthenticationActionType.SIGN_IN_SUCCESS),
    map((action: any) => {
      webStorage.authToken(action.payload.token.token);
      webStorage.rememberMe(action.payload.remember);
      return new userActions.GetUserByToken(action.payload);
    })), { dispatch: true });

  signInFail$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authenticationActions.AuthenticationActionType.SIGN_IN_FAIL),
    map((action: any) => {
      return action.payload.ok;
    })), { dispatch: false });

  // GOOGLE SIGN IN
  googleSignIn$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<authenticationActions.GoogleSignIn>(authenticationActions.AuthenticationActionType.GOOGLE_SIGN_IN),
    switchMap((action: authenticationActions.GoogleSignIn) => {
      return this.authenticationService
        .googleSignIn(action.payload.google)
        .pipe(
          map((token) => {
            return new authenticationActions.GoogleSignInSuccess({token, remember: action.payload.remember});
          }),
          catchError((error: unknown) => of(new authenticationActions.GoogleSignInFail({ error })))
        );
    })
  ), {dispatch: true});

  googleSignInSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authenticationActions.AuthenticationActionType.GOOGLE_SIGN_IN_SUCCESS),
    map((action: any) => {
      webStorage.authToken(action.payload.token.token);
      webStorage.rememberMe(action.payload.remember);
      return new userActions.GetUserByToken(action.payload);
    })), { dispatch: true });

  googleSignInFail$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authenticationActions.AuthenticationActionType.GOOGLE_SIGN_IN_FAIL),
    map((action: any) => {
      return action.payload.ok;
    })), { dispatch: false });

  // FACEBOOK SIGN IN
  facebookSignIn$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType<authenticationActions.FacebookSignIn>(authenticationActions.AuthenticationActionType.FACEBOOK_SIGN_IN),
    switchMap((action: authenticationActions.FacebookSignIn) => {
      return this.authenticationService
        .facebookSignIn(action.payload.facebook)
        .pipe(
          map((token) => {
            return new authenticationActions.FacebookSignInSuccess({token, remember: action.payload.remember});
          }),
          catchError((error: unknown) => of(new authenticationActions.FacebookSignInFail({ error })))
        );
    })
  ), {dispatch: true});

  facebookSignInSuccess$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authenticationActions.AuthenticationActionType.FACEBOOK_SIGN_IN_SUCCESS),
    map((action: any) => {
      webStorage.authToken(action.payload.token.token);
      webStorage.rememberMe(action.payload.remember);
      return new userActions.GetUserByToken(action.payload);
    })), { dispatch: true });

  facebookSignInFail$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(authenticationActions.AuthenticationActionType.FACEBOOK_SIGN_IN_FAIL),
    map((action: any) => {
      return action.payload.ok;
    })), { dispatch: false });
}
