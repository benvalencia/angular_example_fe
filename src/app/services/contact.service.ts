import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {ApiClient} from '../core/utils/api-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private api: ApiClient
  ) { }

  getContactList(): Observable<any> {
    return this.api.get(environment.api.contact.list);
  }
  getContactCounter(): Observable<any> {
    return this.api.get(environment.api.widget.contact.counter);
  }

  createContact(body: any): Observable<any> {
    return this.api.post(environment.api.contact.create, body);
  }
}
