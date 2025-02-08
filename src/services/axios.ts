import axios from 'axios';
import { ALPHAVANTAGE_BASE_URL_STRING } from '../constants/constants';

export const getBaseUrl = () => `${ALPHAVANTAGE_BASE_URL_STRING}`;

const axiosInstance = axios.create({
  baseURL: getBaseUrl(),
});

export const updateBaseUrl = () => {
  axiosInstance.defaults.baseURL = getBaseUrl();
};

export const axiosGetInstance = (params: any) => axiosInstance({ method: 'GET', params });

export default axiosInstance;
