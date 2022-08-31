import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {ApiCaller} from '../apiCaller.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalyApiService {

  private globaly = environment.apiExternal.globaly;

  constructor(
    public api: ApiCaller
  ) {}

  getCountriesList(): Observable<any> {
    return this.api.get(this.globaly.url, this.globaly.api.country);
  }
}
