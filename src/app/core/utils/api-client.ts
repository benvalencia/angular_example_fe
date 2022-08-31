import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnvService } from '../services/env.service';

export interface IRequestOptions {
  headers?:
    | HttpHeaders
    | {
    [param: string]: string | string[];
  };
  observe?: 'body';
  params?:
    | HttpParams
    | {
    [param: string]: string | string[];
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

export function apiClientCreator(http: HttpClient, envService: EnvService): ApiClient {
  return new ApiClient(http, envService);
}

@Injectable()
export class ApiClient {
  private api;

  public constructor(
    public http: HttpClient,
    public envService: EnvService) {
    this.api = this.envService.apiUrl;
  }
  public get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.get<T>(this.api + '/' + endPoint, options);
  }
  public post<T>(endPoint: string, params: object, options?: IRequestOptions): Observable<T> {
    return this.http.post<T>(this.api + '/' + endPoint, params, options);
  }
  public put<T>(endPoint: string, params: object, options?: IRequestOptions): Observable<T> {
    return this.http.put<T>(this.api + '/' + endPoint, params, options);
  }
  public patch<T>(endPoint: string, params?: object, options?: IRequestOptions): Observable<T> {
    return this.http.patch<T>(this.api + '/' + endPoint, params, options);
  }
  public delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.delete<T>(this.api + '/' + endPoint, options);
  }
}
