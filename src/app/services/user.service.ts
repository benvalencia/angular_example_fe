import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {ApiClient} from '../core/utils/api-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private api: ApiClient
  ) { }

  getUserById(id: string): Observable<any> {
    return this.api.get(environment.api.user.byId + id);
  }
  getUserByToken(): Observable<any> {
    return this.api.get(environment.api.user.byToken);
  }
  updateUser(body: object): Observable<any> {
    return this.api.patch(environment.api.user.update, body);
  }
  activateUser(id: string): Observable<any> {
    return this.api.patch(environment.api.user.activate + id);
  }
  deactivateUser(id: string): Observable<any> {
    return this.api.patch(environment.api.user.deactivate + id);
  }
  softDeleteUser(id: string): Observable<any> {
    return this.api.patch(environment.api.user.softDelete + id);
  }
  deleteUser(id: string): Observable<any> {
    return this.api.patch(environment.api.user.delete + id);
  }

}
