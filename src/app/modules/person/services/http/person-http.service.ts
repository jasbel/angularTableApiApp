import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResult } from 'src/app/utils';
import { HttpClient } from '@angular/common/http';
import {
  PersonInfoModel,
} from '../../models';

@Injectable({
  providedIn: 'root',
})
export class PersonHttpService {
  constructor(private http: HttpClient) {}

  findAll(queryString: string = ''): Observable<IResult<PersonInfoModel>> {
    return this.http.get<any>('/people');
  }

  // find(itemId: string): Observable<IResult<PersonInfoModel>> {
  //   return this.httpGeneric.find('/people', itemId);
  // }

  // create(item: PersonCreateModel): Observable<IResult> {
  //   const _item: PersonCreateModel = { ...item };
  //   return this.httpGeneric.create('/people', _item);
  // }

  // update(user: PersonEditModel, userId: string): Observable<IResult> {
  //   return this.httpGeneric.update('/people', user, `${userId}`);
  // }

  // delete(userId: string): Observable<IResult> {
  //   return this.httpGeneric.delete('/people', `${userId}`);
  //   // return this.httpGeneric.delete('/people/delete', `${userId}`);
  // }

  // deactive(userId: string): Observable<IResult> {
  //   return this.httpGeneric.deactive('/people/active', `${userId}`);
  // }

  // restore(userId: string): Observable<IResult> {
  //   return this.httpGeneric.restore('/people/deactive', `${userId}`);
  // }
}
