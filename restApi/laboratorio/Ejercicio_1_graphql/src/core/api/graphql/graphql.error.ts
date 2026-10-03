import { ClientError } from 'graphql-request';
import { ApiError } from '../api.error';

const isTimeout = (error: unknown): boolean =>
  error instanceof DOMException &&
  (error.name === 'TimeoutError' || error.name === 'AbortError');

export const toApiError = (error: unknown): ApiError => {
  if (isTimeout(error)) {
    return new ApiError('network', 'La petición ha tardado demasiado');
  }

  if (error instanceof TypeError) {
    return new ApiError('network', 'No se pudo conectar con el servidor');
  }

  if (!(error instanceof ClientError)) {
    const message = error instanceof Error ? error.message : String(error);
    return new ApiError('unknown', message);
  }

  const { status, errors } = error.response;
  const [firstError] = errors ?? [];

  return new ApiError('response', firstError?.message ?? error.message, status);
};
