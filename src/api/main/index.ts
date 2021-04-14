import request from '../api';
import { BookStore, LoginResponse } from '../model';

export const getNaverMain = () => {
  return request().get('/');
};

export const getBookstores = (lat: number, lng: number): BookStore[] => {
  return [
    {
      lat: 36.3915518381336,
      lng: 127.3621463185,
      storeId: 1,
      storeName: '용성서점',
    },
    {
      lat: 36.3917518381336,
      lng: 127.3641463185,
      storeId: 2,
      storeName: '대성 서점',
    },
    {
      lat: 36.3913518381336,
      lng: 127.3626463185,
      storeId: 2,
      storeName: '진아 서점',
    },
    {
      lat: 36.3917518381336,
      lng: 127.3635463185,
      storeId: 2,
      storeName: '서영 서점',
    },
  ];
};

export const loginRequest = (
  id: string,
  password: string,
): LoginResponse | null => {
  try {
    return {
      accessToken: '엑세스 토큰',
      refreshToken: '리프레시 토큰',
    };
  } catch {
    return null;
  }
};
