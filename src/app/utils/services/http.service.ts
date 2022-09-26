import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IResult } from '../interfaces';
import { IDataGeneric } from '../interfaces/result.interfaces';
import { AuthLocalService } from './auth-local.service';

const environment = {
  apiUrl: 'http://localhost:1337/api',
};

@Injectable({
  providedIn: 'root',
})
export class HttpService<TF, TC = TF, TE = TC> {
  constructor(private http: HttpClient, private authLocal: AuthLocalService) {}

  findAll(endpoint: string, queryString?: string): Observable<IResult<TF>> {
    const query = queryString ? `?filters=${queryString}` : '';
    return this.http.get<IResult<TF>>(
      `${environment.apiUrl}${endpoint}${query}`,
      this.authLocal.headers
      // this.getHeaders()
    );
  }

  find(endpoint: string, itemId: string): Observable<IResult<TF>> {
    return this.http.get<IResult<TF>>(
      `${environment.apiUrl}${endpoint}/${itemId}`,
      this.authLocal.headers
    );
  }

  create(endpoint: string, item: TC): Observable<IResult> {
    return this.http.post<IResult>(
      `${environment.apiUrl}${endpoint}`,
      item,
      this.authLocal.headers
    );
  }

  update(endpoint: string, item: TE, itemId: string): Observable<IResult> {
    return this.http.put<IResult>(
      `${environment.apiUrl}${endpoint}/${itemId}`,
      item,
      this.authLocal.headers
    );
  }

  deactive(endpoint: string, itemId: string): Observable<IResult> {
    return this.http.put<IResult>(
      `${environment.apiUrl}${endpoint}/${itemId}`,
      { active: false } as Partial<IDataGeneric>,
      this.authLocal.headers
    );
  }

  restore(endpoint: string, itemId: string): Observable<IResult> {
    return this.http.put<IResult>(
      `${environment.apiUrl}${endpoint}/${itemId}`,
      { active: true } as Partial<IDataGeneric>,
      this.authLocal.headers
    );
  }

  delete(endpoint: string, itemId: string): Observable<IResult> {
    return this.http.put<IResult>(
      `${environment.apiUrl}${endpoint}/${itemId}`,
      this.authLocal.headers
    );
  }
}
