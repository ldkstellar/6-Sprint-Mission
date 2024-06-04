import axios, { AxiosError, AxiosResponse } from 'axios';
import instance from './axios';

export interface writing {
  id: number;
  title: string;
  image: string | null;
  likeCount: number;
  createdAt: string;
  updateAt: string;
  content: string;
  writer: { id: number; nickname: string };
}

export const getBestPosts = async (params: string): Promise<writing[]> => {
  const URL = `/articles?${params}`;
  try {
    const response: AxiosResponse<any> = await instance.get(URL);
    return response.data.list;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.error('Response error:', err.response.status);
      console.error('Response data:', err.response.data);
      throw err;
    }

    throw error;
  }
};

export const getTotalPosts = async (params: string): Promise<writing[]> => {
  const URL = `/articles?${params}`;
  try {
    const response: AxiosResponse<any> = await instance.get(URL);
    return response.data.list;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response) {
      console.error('Response error:', err.response.status);
      console.error('Response data:', err.response.data);
      throw err;
    }
    console.error(error);
    throw error;
  }
};

