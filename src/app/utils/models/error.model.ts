import { IError, IHeaders, IResult, StatusCode } from '../interfaces';

export class ErrorGeneric implements IError {
  headers: IHeaders;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: IResult<void>;

  constructor() {
    this.headers = {
      lazyUpdate: null,
      normalizedNames: '',
    };
    this.status = 0;
    this.statusText = '';
    this.url = '';
    this.ok = false;
    this.name = '';
    this.message = '';
    this.error = {
      count: 0,
      data: [],
      message: [],
      statuscode: StatusCode.errRequest,
      timestamp: '',
    };
  }
}
