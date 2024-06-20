import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';
import { postRefreshToken } from './api';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    const token = Cookies.get('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  async (error: AxiosError) => {
    // 요청이 실패할 경우 실행됩니다.
    if (error.status === 401) {
      await postRefreshToken();
    }
    return Promise.reject(error);
  }
);
export default instance;

