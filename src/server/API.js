import axios from 'axios';

import { MELI_BASE_URL } from './config/constants';

export const API = axios.create({
  baseURL: MELI_BASE_URL,
});

API.interceptors.response.use(
  ({ data }) => data,
  (error) => Promise.reject(error),
);
