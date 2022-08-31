// import { Observable, Subject } from 'rxjs';
// import { TaskViewModeConfig } from 'src/app/config/view.config';
// import { UserEntity } from '../entities/user.entity';
import {UserEntity} from '../entities/user.entity';

class WebStorage {
  // @ts-ignore
  private self: UserEntity;

  // private userSubscription = new Subject<UserEntity>();

  /***** observables *****/
  // userObservable(): Observable<any> {
  //   return this.userSubscription.asObservable();
  // }

  // AUTH TOKEN
  public authToken(token?: string): string | any | void {
    if (token) {
      localStorage.setItem('auth-token', token);
    } else {
      return localStorage.getItem('auth-token');
    }
  }
  // REMEMBER ME
  public rememberMe(remember?: boolean): string | null | void {
    if (remember) {
      localStorage.setItem('remember', remember.toString());
    } else {
      return localStorage.getItem('remember');
    }
  }

  public removeAuthToken(): void {
    localStorage.removeItem('auth-token');
  }

  // CSRF TOKEN
  // public get csrfToken(): string {
  //   return localStorage.getItem('csrf-token');
  // }
  // public set csrfToken(token: string) {
  //   localStorage.setItem('csrf-token', token);
  // }
  // public removeCsrfToken() {
  //   localStorage.removeItem('csrf-token');
  // }

  // USER SESSION
  public get user(): UserEntity {
    if (!this.self) {
      const obj = JSON.parse(localStorage.getItem('user') as string);
      if (obj) {
        return obj;
        // return new UserEntity();
      } else {
        return obj;
      }
    }
    return this.self;
  }
  public set user(user: UserEntity) {
    this.self = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
  public removeUser(): void {
    // @ts-ignore
    this.self = null;
    localStorage.removeItem('user');
  }
  /**
   * Get Task description
   */
  // public get showTaskDescription(): boolean {
  //   const show = localStorage.getItem('showTaskDescription');
  //   if (show && show === 'false') {
  //     return false;
  //   }
  //
  //   return true; // True by default
  // }
  // public set showTaskDescription(val: boolean) {
  //   localStorage.setItem('showTaskDescription', val.toString());
  // }

  /**
   * Get task view mode
   */
  // public get taskViewMode(): number {
  //   const mode = +localStorage.getItem('taskViewMode');
  //   return mode || TaskViewModeConfig.GRID; // Default GRID
  // }
  /**
   * Set Task view mode
   */
  // public set taskViewMode(val: number) {
  //   localStorage.setItem('taskViewMode', val.toString());
  // }

  /***** functions ******/
  public removeAll(): void {
    this.removeAuthToken();
    // this.removeCsrfToken();
    this.removeUser();
  }
}

export let  webStorage = new WebStorage();
