import axios from 'axios';

export type ApiErrorKind = 'notFound' | 'response' | 'network' | 'unknown';

export class ApiError extends Error {
  kind: ApiErrorKind;
  status?: number;

  constructor(kind: ApiErrorKind, message: string, status?: number) {
    super(message);
    this.name = 'ApiError';
    this.kind = kind;
    this.status = status;
  }
}

interface ApiErrorBody {
  error?: string;
}

export const toApiError = (error: unknown): ApiError => {
  if (!axios.isAxiosError(error)) {
    const message = error instanceof Error ? error.message : String(error);
    return new ApiError('unknown', message);
  }

  if (error.response) {
    const { status, data } = error.response;
    const message = (data as ApiErrorBody)?.error ?? error.message;
    return new ApiError(status === 404 ? 'notFound' : 'response', message, status);
  }

  if (error.request) {
    return new ApiError('network', 'No se pudo conectar con el servidor');
  }

  return new ApiError('unknown', error.message);
};
