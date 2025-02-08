import { axiosGetInstance } from './axios';
import { API_KEY } from '../constants/constants';

export const getCompanyOverview = async (symbol: string) => {
  const response = await axiosGetInstance({
    function: 'OVERVIEW',
    symbol,
    apiKey: API_KEY,
  });
  return response.data;
};

export const getETFProfile = async (symbol: string) => {
  const response = await axiosGetInstance({
    function: 'ETF_PROFILE',
    symbol,
    apiKey: API_KEY,
  });
  return response.data;
};

export const tickerSearch = async (symbol: string) => {
  const response = await axiosGetInstance({
    function: 'SYMBOL_SEARCH',
    keywords: symbol,
    apiKey: API_KEY,
  });
  return response.data;
};
