import { StatusCode } from '../interfaces';

export const notyStatus: { [key in StatusCode]: string } = {
  [StatusCode.ok]: 'Peticion Realiza Correctamente',
  [StatusCode.success]: 'Peticion Realiza Correctamente',
  [StatusCode.created]: 'Creado Correctamente',
  [StatusCode.updated]: 'Modificado Correctamente',
  [StatusCode.deleted]: 'Eliminado Satisfactoriamente',
  [StatusCode.authenticated]: 'Usuario Authenticado',
  [StatusCode.errRequest]: 'Error en la Peticion',
  [StatusCode.notFound]: 'ruta no encontrada',
  [StatusCode.alreadyExist]: 'El dato o id ya existe',
  [StatusCode.validationFailed]: 'Validacion fallida, ver siguientes datos:',
  [StatusCode.tokenExpired]: 'Token Expirado',
  [StatusCode.errorAuthentication]: 'Error de Authenticacion',
  [StatusCode.errorAuthorization]: 'Error de Autorizacion',
  [StatusCode.serverError]: 'Error interno del Servidor',
};
