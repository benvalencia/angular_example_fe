import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {ApiClient} from '../core/utils/api-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  constructor(
    private api: ApiClient
  ) { }

  getWorkerList(): Observable<any> {
    return this.api.get(environment.api.worker.list);
  }

  createWorker(body: any): Observable<any> {
    return this.api.post(environment.api.worker.create, body);
  }
}
