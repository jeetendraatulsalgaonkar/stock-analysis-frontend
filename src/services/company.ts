import axiosInstance, { axiosGetInstance } from './axios';
import { API_KEY } from '../constants/constants';
import {Ticker} from "../types/coreStock.type";

export const getCompanyOverview = async (symbol: string) => {
  const response = await axiosGetInstance({
    function: 'OVERVIEW',
    symbol,
    apikey: API_KEY,
  });
  return response.data;
};

export const getETFProfile = async (symbol: string) => {
  const response = await axiosGetInstance({
    function: 'ETF_PROFILE',
    symbol,
    apikey: API_KEY,
  });
  return response.data;
};

export const tickerSearch = async (queryString: string, page: number, size: number) => {
  const response = await axiosInstance({
    method: 'GET',
    url: `http://localhost:3000/stocks/queryString=${queryString}&page=${page}&size=${size}`,
  });
  return response.data;
};

export const allTickers = async (page: number, size: number) => {
  const response = await axiosInstance({
    method: 'GET',
    url: `http://localhost:3000/stocks/page=${page}&size=${size}`,
  });
  return response.data;
}
