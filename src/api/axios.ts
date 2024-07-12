import axios, { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { postRefreshToken } from './api';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

instance.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  async (error: AxiosError) => {
    const originalRequest = error.config;
    if (typeof originalRequest !== 'undefined') {
      if (error.response?.status === 401) {
        await postRefreshToken();
        return instance.request(originalRequest);
      }
    }
    // 요청이 실패할 경우 실행됩니다.
    return Promise.reject(error);
  }
);
export default instance;

