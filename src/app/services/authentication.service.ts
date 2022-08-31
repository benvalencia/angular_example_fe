import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
// import { ChangePasswordEntity, ResetPasswordEntity } from '../core/entities';
import { ApiClient } from '../core/utils/api-client';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private api: ApiClient
  ) {}

  signIn(username: string, password: string): Observable<any> {
    return this.api.post(environment.api.authentication.signIn, {
      username,
      password
    });
  }

  googleSignIn(google: string): Observable<any> {
    return this.api.post(environment.api.authentication.google, {
      google
    });
  }

  facebookSignIn(facebook: string): Observable<any> {
    return this.api.post(environment.api.authentication.facebook, {
      facebook
    });
  }

  // signUp(name: string,
  //        lastName: string,
  //        email: string,
  //        username: string,
  //        password: string): Observable<any> {
  //   return this.api.post(environment.api.authentication.signUp, {
  //     name,
  //     lastName,
  //     email,
  //     username,
  //     password,
  //   });
  // }

  // /**
  //  * Reset the user's password.
  //  * @param email Login email associated with the account to reset.
  //  */
  // forgotPassword(email: string) {
  //   return this.api.post(environment.api.endpoints.forgotPassword, {
  //     email: email
  //   });
  // }
  //
  // verifyResetToken(token: string) {
  //   return this.api.post(`${environment.api.endpoints.resetPassword}/${token}`, undefined);
  // }
  //
  // resetPassword(token: string, reset: ResetPasswordEntity) {
  //   return this.api.post(`${environment.api.endpoints.resetPassword}/${token}`, {
  //     password: reset.password
  //   });
  // }

  // /**
  //  * Update the user password against the API.
  //  * @param changePassword user old and new password
  //  */
  // updatePassword(changePassword: ChangePasswordEntity): Observable<any> {
  //   return this.api.post(environment.api.endpoints.updatePassword, {
  //     oldPassword: changePassword.oldPassword,
  //     newPassword: changePassword.password
  //   });
  // }
}
