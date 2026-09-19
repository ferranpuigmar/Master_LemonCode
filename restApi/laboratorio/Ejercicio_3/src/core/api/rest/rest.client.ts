import axios from 'axios';
import { toApiError } from './rest.error';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  transitional: { clarifyTimeoutError: true },
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(toApiError(error))
);
