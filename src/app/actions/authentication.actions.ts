import {Action} from '@ngrx/store';

export enum AuthenticationActionType {
  // Sign Up
  SIGN_UP = '[Authentication] Sign Up',
  SIGN_UP_SUCCESS = '[Authentication] Sign Up Success',
  SIGN_UP_FAIL = '[Authentication] Sign Up Fail',
  // Sign In
  SIGN_IN = '[Authentication] Sign In',
  SIGN_IN_SUCCESS = '[Authentication] Sign In Success',
  SIGN_IN_FAIL = '[Authentication] Sign In Fail',
  // Google Sign Up
  GOOGLE_SIGN_UP = '[Authentication] Google Sign Up',
  GOOGLE_SIGN_UP_SUCCESS = '[Authentication] Google Sign Up Success',
  GOOGLE_SIGN_UP_FAIL = '[Authentication] Google Sign Up Fail',
  // Google Sign In
  GOOGLE_SIGN_IN = '[Authentication] Google Sign In',
  GOOGLE_SIGN_IN_SUCCESS = '[Authentication] Google Sign In Success',
  GOOGLE_SIGN_IN_FAIL = '[Authentication] Google Sign In Fail',
  // Apple Sign Up
  APPLE_SIGN_UP = '[Authentication] Apple Sign Up',
  APPLE_SIGN_UP_SUCCESS = '[Authentication] Apple Sign Up Success',
  APPLE_SIGN_UP_FAIL = '[Authentication] Apple Sign Up Fail',
  // Apple Sign In
  APPLE_SIGN_IN = '[Authentication] Apple Sign In',
  APPLE_SIGN_IN_SUCCESS = '[Authentication] Apple Sign In Success',
  APPLE_SIGN_IN_FAIL = '[Authentication] Apple Sign In Fail',
  // Facebook Sign Up
  FACEBOOK_SIGN_UP = '[Authentication] Facebook Sign Up',
  FACEBOOK_SIGN_UP_SUCCESS = '[Authentication] Facebook Sign Up Success',
  FACEBOOK_SIGN_UP_FAIL = '[Authentication] Facebook Sign Up Fail',
  // Facebook Sign In
  FACEBOOK_SIGN_IN = '[Authentication] Facebook Sign In',
  FACEBOOK_SIGN_IN_SUCCESS = '[Authentication] Facebook Sign In Success',
  FACEBOOK_SIGN_IN_FAIL = '[Authentication] Facebook Sign In Fail',
  // Microsoft Sign Up
  MICROSOFT_SIGN_UP = '[Authentication] Microsoft Sign Up',
  MICROSOFT_SIGN_UP_SUCCESS = '[Authentication] Microsoft Sign Up Success',
  MICROSOFT_SIGN_UP_FAIL = '[Authentication] Microsoft Sign Up Fail',
  // Microsoft Sign In
  MICROSOFT_SIGN_IN = '[Authentication] Microsoft Sign In',
  MICROSOFT_SIGN_IN_SUCCESS = '[Authentication] Microsoft Sign In Success',
  MICROSOFT_SIGN_IN_FAIL = '[Authentication] Microsoft Sign In Fail',
}

// Sign Up
export class SignUp implements Action {
  readonly type = AuthenticationActionType.SIGN_UP;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class SignUpSuccess implements Action {
  readonly type = AuthenticationActionType.SIGN_UP_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class SignUpFail implements Action {
  readonly type = AuthenticationActionType.SIGN_UP_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: string) {
  }
}
// Sign In
export class SignIn implements Action {
  readonly type = AuthenticationActionType.SIGN_IN;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class SignInSuccess implements Action {
  readonly type = AuthenticationActionType.SIGN_IN_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class SignInFail implements Action {
  readonly type = AuthenticationActionType.SIGN_IN_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}

// Google Sign Up
export class GoogleSignUp implements Action {
  readonly type = AuthenticationActionType.GOOGLE_SIGN_UP;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class GoogleSignUpSuccess implements Action {
  readonly type = AuthenticationActionType.GOOGLE_SIGN_UP_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class GoogleSignUpFail implements Action {
  readonly type = AuthenticationActionType.GOOGLE_SIGN_UP_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: string) {
  }
}
// Google Sign In
export class GoogleSignIn implements Action {
  readonly type = AuthenticationActionType.GOOGLE_SIGN_IN;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class GoogleSignInSuccess implements Action {
  readonly type = AuthenticationActionType.GOOGLE_SIGN_IN_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class GoogleSignInFail implements Action {
  readonly type = AuthenticationActionType.GOOGLE_SIGN_IN_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}

// Apple Sign Up
export class AppleSignUp implements Action {
  readonly type = AuthenticationActionType.APPLE_SIGN_UP;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class AppleSignUpSuccess implements Action {
  readonly type = AuthenticationActionType.APPLE_SIGN_UP_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class AppleSignUpFail implements Action {
  readonly type = AuthenticationActionType.APPLE_SIGN_UP_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: string) {
  }
}
// Apple Sign In
export class AppleSignIn implements Action {
  readonly type = AuthenticationActionType.APPLE_SIGN_IN;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class AppleSignInSuccess implements Action {
  readonly type = AuthenticationActionType.APPLE_SIGN_IN_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class AppleSignInFail implements Action {
  readonly type = AuthenticationActionType.APPLE_SIGN_IN_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}

// Facebook Sign Up
export class FacebookSignUp implements Action {
  readonly type = AuthenticationActionType.FACEBOOK_SIGN_UP;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class FacebookSignUpSuccess implements Action {
  readonly type = AuthenticationActionType.FACEBOOK_SIGN_UP_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class FacebookSignUpFail implements Action {
  readonly type = AuthenticationActionType.FACEBOOK_SIGN_UP_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: string) {
  }
}
// Facebook Sign In
export class FacebookSignIn implements Action {
  readonly type = AuthenticationActionType.FACEBOOK_SIGN_IN;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class FacebookSignInSuccess implements Action {
  readonly type = AuthenticationActionType.FACEBOOK_SIGN_IN_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class FacebookSignInFail implements Action {
  readonly type = AuthenticationActionType.FACEBOOK_SIGN_IN_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}

// Microsoft Sign Up
export class MicrosoftSignUp implements Action {
  readonly type = AuthenticationActionType.MICROSOFT_SIGN_UP;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class MicrosoftSignUpSuccess implements Action {
  readonly type = AuthenticationActionType.MICROSOFT_SIGN_UP_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class MicrosoftSignUpFail implements Action {
  readonly type = AuthenticationActionType.MICROSOFT_SIGN_UP_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: string) {
  }
}
// Microsoft Sign In
export class MicrosoftSignIn implements Action {
  readonly type = AuthenticationActionType.MICROSOFT_SIGN_IN;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class MicrosoftSignInSuccess implements Action {
  readonly type = AuthenticationActionType.MICROSOFT_SIGN_IN_SUCCESS;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}
export class MicrosoftSignInFail implements Action {
  readonly type = AuthenticationActionType.MICROSOFT_SIGN_IN_FAIL;
  // TODO: Change the payload type into auth entity
  constructor(public payload: any) {}
}

export type Actions =
  SignUp | SignUpSuccess | SignUpFail |
  SignIn | SignInSuccess | SignInFail |
  GoogleSignUp | GoogleSignUpSuccess | GoogleSignUpFail |
  GoogleSignIn | GoogleSignInSuccess | GoogleSignInFail |
  AppleSignUp | AppleSignUpSuccess | AppleSignUpFail |
  AppleSignIn | AppleSignInSuccess | AppleSignInFail |
  FacebookSignUp | FacebookSignUpSuccess | FacebookSignUpFail |
  FacebookSignIn | FacebookSignInSuccess | FacebookSignInFail |
  MicrosoftSignUp | MicrosoftSignUpSuccess | MicrosoftSignUpFail |
  MicrosoftSignIn | MicrosoftSignInSuccess | MicrosoftSignInFail;
