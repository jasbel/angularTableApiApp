import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IResult } from '../interfaces';
import { IDataGeneric } from '../interfaces/result.interfaces';

const environment = {
  apiUrl: 'http://localhost:1337/api',
};

@Injectable({
  providedIn: 'root',
})
export class AuthLocalService {
  constructor() {}

  get token() {
    return localStorage.getItem('token') || '';
  }

  get headers() {
    const httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return { headers: httpHeaders };
  }

  private getHeaders() {
    return this.headers;
  }

  private getToken(): string {
    return this.token;
  }
}
