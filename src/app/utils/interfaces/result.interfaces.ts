// ?page=1&pageSize=100&sort=publishedAt:ASC&_q=a&filters[$and][0][name][$eq]=Zita&filters[$and][1][phone][$notNull]=true

export enum StatusCode {
  ok = 1000,
  success = 1000,
  created = 2001,
  updated = 2002,
  deleted = 2003,
  authenticated = 4000,
  errRequest = -1000,
  notFound = -2000,
  alreadyExist = -2001,
  validationFailed = -2004,
  tokenExpired = -2008,
  errorAuthentication = -4000,
  errorAuthorization = -4001,
  serverError = -5000,
}

export interface IResult<T = void> {
  data: T[];
  message: string[];
  timestamp: string;
  count: number;
  statuscode: StatusCode;
}

export interface IError<T = void> {
  headers: IHeaders;
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: IResult<T>;
}

export interface ICreatedDate {
  date: string;
  timezone_type: number;
  timezone: string | 'UTC';
}

export interface IHeaders {
  normalizedNames: any;
  lazyUpdate: null;
}

export interface IDataGeneric {
  id: boolean;
  active: boolean;
  createdDate: ICreatedDate;
}
