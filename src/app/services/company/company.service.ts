import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {ApiClient} from '../../core/utils/api-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private api: ApiClient
  ) { }

  getCompanyAdminList(): Observable<any> {
    return this.api.get(environment.api.company.admin.list);
  }
}
