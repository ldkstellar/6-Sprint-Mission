import axios, { AxiosError, AxiosResponse } from 'axios';
import instance from './axios';
import {
  articlesType,
  articleType,
  commentsType,
  commentType,
  writingType,
} from './apiType';
import Cookies from 'js-cookie';
import { formType } from '../components/AddBoardForm';

const E_MAIL = 'leedong0225@icloud.com';
const PASS_WORD = 'abcd1234';

export const getBestPosts = async (params: string): Promise<writingType[]> => {
  const URL = `/articles?${params}`;
  try {
    const response: AxiosResponse<articlesType> = await instance.get(URL);
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

export const getTotalPosts = async (params: string): Promise<writingType[]> => {
  const URL = `/articles?${params}`;
  try {
    const response: AxiosResponse<articlesType> = await instance.get(URL);
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

export const tempSignIn = async () => {
  const TEMP_URL = '/auth/signIn';
  try {
    if (!Cookies.get('accessToken')) {
      const response = await instance.post(TEMP_URL, {
        email: E_MAIL,
        password: PASS_WORD,
      });
      const { accessToken, refreshToken } = response.data;
      Cookies.set('accessToken', accessToken);
      Cookies.set('refreshToken', refreshToken);
    }
  } catch (error) {}
};

export const postImage = async (image: File | null) => {
  const URL = '/images/upload';

  try {
    if (image) {
      const response = await instance.post(
        URL,
        { image: image },
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      const imageUrl = response.data.url;
      return imageUrl;
    }
    return '';
  } catch (error) {}
};

export const postArticles = async (formData: formType, imageUrl: string) => {
  const URL = '/articles';
  try {
    await instance.post(
      URL,
      {
        image: imageUrl,
        content: formData.content,
        title: formData.title,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          accept: 'application/json',
        },
      }
    );
  } catch (error) {}
};

export const getArticle = async (articleId: string): Promise<articleType> => {
  const URL = `/articles/${articleId}`;
  try {
    const response: AxiosResponse<articleType> = await instance.get(URL);
    const articleData = response.data;
    return articleData;
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

export const getComments = async (
  articleId: string,
  limit: number,
  cursor?: number
): Promise<[commentType]> => {
  const URL = `/articles/${articleId}/comments?limit=${limit}${
    cursor ? `&cursor=${cursor}` : ''
  }`;
  try {
    const response: AxiosResponse<commentsType> = await instance.get(URL);
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

