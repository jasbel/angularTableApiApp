import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Observable,
  BehaviorSubject,
  map,
  catchError,
  of,
  finalize,
} from 'rxjs';
import { IResult, IError, ErrorGeneric } from 'src/app/utils';
import { PersonCreateModel, PersonEditModel, PersonInfoModel } from '../models';
import { PersonHttpService } from './http/person-http.service';
import { HttpService } from '../../../utils/services/http.service';

export type PersonType = PersonInfoModel | undefined;

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  currentPerson$: Observable<PersonType>;
  isLoading$: Observable<boolean>;
  currentPersonSubject: BehaviorSubject<PersonType>;
  isLoadingSubject: BehaviorSubject<boolean>;

  constructor(
    // private userHttpService: PersonHttpService,

    private httpGeneric: HttpService<
      PersonInfoModel,
      PersonCreateModel,
      PersonEditModel
    > // private router: Router
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.currentPersonSubject = new BehaviorSubject<PersonType>(undefined);
    this.currentPerson$ = this.currentPersonSubject.asObservable();
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  findAll(
    queryString?: string
  ): Observable<IResult<PersonInfoModel> | undefined> {
    this.isLoadingSubject.next(true);
    return this.httpGeneric.findAll('/people', queryString).pipe(
      map((resp) => ({
        ...resp,
        data: [],
        count: 0,
        message: [''],
        statuscode: 200,
        timestamp: '',
      })),
      catchError((err) => {
        console.error('err', err);
        return of(undefined);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
  /* 
  find(userId: string): Observable<IResult<PersonInfoModel>> {
    this.isLoadingSubject.next(true);
    return this.userHttpService.find(userId).pipe(
      map((resp) => resp),
      catchError((err) => {
        console.error('err', err);
        return of(err.error || new ErrorGeneric());
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  create(user: PersonCreateModel): Observable<IResult> {
    this.isLoadingSubject.next(true);
    return this.userHttpService.create(user).pipe(
      map((_user) => _user),
      catchError((err: IError) => {
        console.error('err', err);
        return of(err.error || new ErrorGeneric());
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  update(user: PersonEditModel, userId: string): Observable<IResult> {
    this.isLoadingSubject.next(true);
    return this.userHttpService.update(user, userId).pipe(
      map((data) => data),
      catchError((err: IError) => {
        console.error('err', err);
        return of(err.error || new ErrorGeneric());
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  deactive(userId: string): Observable<IResult> {
    this.isLoadingSubject.next(true);
    return this.userHttpService.deactive(userId).pipe(
      map((data) => data),
      catchError((err: IError) => {
        console.error('err', err);
        return of(err.error || new ErrorGeneric());
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  restore(userId: string): Observable<IResult> {
    this.isLoadingSubject.next(true);
    return this.userHttpService.restore(userId).pipe(
      map((data) => data),
      catchError((err: IError) => {
        console.error('err', err);
        return of(err.error || new ErrorGeneric());
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  } */
}
