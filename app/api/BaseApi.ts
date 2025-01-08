import axios from 'axios';
import getToken from './getToken';
import * as dotenv from 'dotenv';

dotenv.config();

const BaseApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_API_ENDPOINT}`,
});

BaseApi.interceptors.request.use(
  async (config) => {
    try {
      const token = await getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default BaseApi;
