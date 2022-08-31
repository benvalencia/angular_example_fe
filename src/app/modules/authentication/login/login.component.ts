import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as authenticationActions from '../../../actions/authentication.actions';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  MicrosoftLoginProvider,
  SocialAuthService,
  SocialUser
} from 'angularx-social-login';
import {LoginEntity} from '../../../core/entities/authentication.entity';
import {environment} from '../../../../environments/environment';
import {Actions, ofType} from '@ngrx/effects';
import {takeUntil} from 'rxjs/operators';
import {AuthenticationActionType} from '../../../actions/authentication.actions';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {webStorage} from '../../../core/utils/webstorage';
import {UserActionType} from '../../../actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  login: LoginEntity = new LoginEntity();
  images = environment.images.background.login;
  icons = environment.images.social;
  error = false;
  errorData = '';
  isSubmitting = false;
  destroyed$ = new Subject<boolean>();

  socialUser: SocialUser | any  ;
  isLoggedin?: boolean;

  constructor(
    private store: Store<{}>,
    private socialAuthService: SocialAuthService,
    private actions$: Actions,
    private router: Router
  ) {
    this.actions$.pipe(
      ofType(UserActionType.GET_USER_BY_TOKEN_SUCCESS), takeUntil(this.destroyed$))
      .subscribe(() => {
        this.router.navigate(['/app']).then();
      });
    this.actions$.pipe(
      ofType(AuthenticationActionType.SIGN_IN_FAIL), takeUntil(this.destroyed$))
      .subscribe((res: any) => {
        this.isSubmitting = false;
        this.error = true;
        this.errorData = res.payload.error.error;
      });
    this.actions$.pipe(
      ofType(AuthenticationActionType.GOOGLE_SIGN_IN_FAIL), takeUntil(this.destroyed$))
      .subscribe((res: any) => {
        this.isSubmitting = false;
        this.error = true;
        this.errorData = res.payload.error.error;
      });
    this.actions$.pipe(
      ofType(AuthenticationActionType.FACEBOOK_SIGN_IN_FAIL), takeUntil(this.destroyed$))
      .subscribe((res: any) => {
        this.isSubmitting = false;
        this.error = true;
        this.errorData = res.payload.error.error;
      });
  }

  ngOnInit(): void {
    if (webStorage.user) {
      this.router.navigate(['/app']).then();
    }
  }
  ngOnDestroy(): void {
    if (this.destroyed$) {
      this.destroyed$.next(true);
      this.destroyed$.complete();
    }
  }

  onLogin(): void {
    this.isSubmitting = true;
    this.store.dispatch(new authenticationActions.SignIn(
      {
        username: this.login.username,
        password: this.login.password,
        remember: this.login.remember
      }
    ));
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((googleData) => {
      this.store.dispatch(new authenticationActions.GoogleSignIn(
        {
          google: googleData.email,
          remember: this.login.remember
        }
      ));
    }).catch((err) => {
      this.isSubmitting = false;
      this.error = true;
      (err.error === 'popup_closed_by_user')
        ? this.errorData =  'Google login was closed'
        : this.errorData = 'A problem just occurred';
    });
  }
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((facebookData) => {
      this.store.dispatch(new authenticationActions.FacebookSignIn(
        {
          facebook: facebookData.email,
          remember: this.login.remember
        }
      ));
    }).catch((err) => {
      this.isSubmitting = false;
      this.error = true;
      (err.error === 'popup_closed_by_user')
        ? this.errorData =  'Facebook login was closed'
        : this.errorData = 'A problem just occurred';
    })
    ;
  }
  loginWithMicrosoft(): void {
    this.socialAuthService.signIn(MicrosoftLoginProvider.PROVIDER_ID).then(() => {
      console.log('test google signed');
      this.store.dispatch(new authenticationActions.GoogleSignIn(
        { username: this.login.username, password: this.login.password}
      ));
    });
  }
}
