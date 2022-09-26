import { notyStatus } from '../constants';
import { IResult, StatusCode } from '../interfaces';

export const getNotifyString = (
  _dataError: Pick<IResult<any>, 'statuscode' | 'data'>
) => {
  const { statuscode, data } = _dataError;

  const errorTitle = notyStatus[statuscode];
  const dataError = getIsStatusError(statuscode) ? getErrorData(data) : '';

  const _notifyError = `${errorTitle} \n ${dataError}`;

  return _notifyError;
};

export const getErrorData = <T extends object>(
  dataObj: T | undefined
): string[] => {
  console.log({ dataObj });
  if (!dataObj) return ['Error' + dataObj];

  let data = dataObj;
  if (Object.prototype.toString.call(dataObj) === '[object Array]') {
    data = (dataObj as T[])[0];
  }

  return Object.entries(data).map(
    ([field, msg]) => ` - ${field}: ${msg.toString()}\n`
  );
};

export const getIsStatusError = (statusCode: StatusCode) => {
  if (statusCode == StatusCode.ok) return false;
  if (statusCode == StatusCode.created) return false;
  if (statusCode == StatusCode.updated) return false;
  if (statusCode == StatusCode.deleted) return false;
  if (statusCode == StatusCode.authenticated) return false;

  return true;
};
