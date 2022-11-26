import { AxiosRequestConfig } from 'axios';

export const BASE_API: AxiosRequestConfig = {
  baseURL: 'https://api.github.com',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
};
