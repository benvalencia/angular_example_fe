import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
// import { Ela } from 'ela';
// import { MeService } from 'src/app/ela-services/me.service';
import { UserEntity } from '../entities/user.entity';
import { webStorage } from '../utils/webstorage';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private translate: TranslateService,
  ) {}
  // private meService: MeService

  /**
   * AuthGuard initialization method subscribes the HTTP 401 error
   */
  // public init() {
  //   this.subscriptions = [
  //     // Eject user if 401 Unauthorized is received
  //     this.ela.exceptionChannel(Ela.UNAUTHORIZED_401).subscribe((_ex) => this.ejectUser()),
  //     // success channel
  //     this.meService.selectMeChannel.successFirstChannel().subscribe((me) => this.updateMe(me))
  //   ];
  // }

  // public destroy() {
  //   this.ela.unsubscribe(this.subscriptions);
  // }

  /**
   * Checks if can be activate, by checking if the token exists, and continue
   */
  public canActivate(): boolean {
    if (!webStorage.authToken()) {
      this.ejectUser();
    }
    // update me user before proceed
    // this.meService.me();
    return true;
  }

  public ejectUser(): void {
    webStorage.removeAll();
    this.router.navigate(['/auth/login']).then( () => console.log('user ejected'));
  }

  public authorized(): UserEntity {
    return webStorage.user;
  }

  public authToken(): string | any {
    return webStorage.authToken;
  }

  public updateMe(user: UserEntity): void {
    webStorage.user = user;
    if (this.translate.currentLang !== user.language) {
      this.translate.use(user.language);
    }
  }
}
