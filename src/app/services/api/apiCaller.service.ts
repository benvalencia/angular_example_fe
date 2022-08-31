import {  HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

@Injectable()
export class ApiCaller {

  public constructor(
    public http: HttpClient) {
  }
  public get<T>(api: string, endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.get<T>(api + '/' + endPoint, options);
  }
  public post<T>(api: string, endPoint: string, params: object, options?: IRequestOptions): Observable<T> {
    return this.http.post<T>(api + '/' + endPoint, params, options);
  }
  public put<T>(api: string, endPoint: string, params: object, options?: IRequestOptions): Observable<T> {
    return this.http.put<T>(api + '/' + endPoint, params, options);
  }
  public patch<T>(api: string, endPoint: string, params?: object, options?: IRequestOptions): Observable<T> {
    return this.http.patch<T>(api + '/' + endPoint, params, options);
  }
  public delete<T>(api: string, endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.delete<T>(api + '/' + endPoint, options);
  }
}
