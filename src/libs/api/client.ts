import axios, { AxiosError, AxiosResponse } from 'axios';

const instance = axios.create({ baseURL: '' });

function responseInterceptorFulfilled(response: AxiosResponse) {
  if (200 <= response.status && response.status < 300) return response.data;

  return Promise.reject(response.data);
}

function responseInterceptorRejected(error: AxiosError) {
  return new Error(error.response?.data ?? error);
}

instance.interceptors.response.use(
  responseInterceptorFulfilled,
  responseInterceptorRejected
);

export function get<T>(...args: Parameters<typeof instance.get>) {
  return instance.get<T, T>(...args);
}
