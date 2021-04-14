export type BookStore = {
  lat: number;
  lng: number;
  storeId: number;
  storeName: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};
