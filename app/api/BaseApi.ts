import axios from 'axios';
import getToken from './getToken';

const BaseApi = axios.create({
  baseURL: 'http://10.10.50.227:3000',
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
  }
);

export default BaseApi;
