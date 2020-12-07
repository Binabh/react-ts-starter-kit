import { AxiosRequestConfig } from 'axios';

export const BASE_API: AxiosRequestConfig = {
  baseURL: 'https://api.mocki.io/v1',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
};
