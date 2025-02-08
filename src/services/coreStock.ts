import { API_KEY } from '../constants/constants';
import { axiosGetInstance } from './axios';
import { TopGainersAndLosers } from '../types/coreStock.type';

export const timeSeriesIntraday = async (symbol: string, interval: string) => {
  const response = await axiosGetInstance({
    function: 'TIME_SERIES_INTRADAY',
    symbol,
    interval,
    apiKey: API_KEY,
  });
  return response.data;
};

export const topGainersAndLosers = async () => {
  const response = await axiosGetInstance({
      function: 'TOP_GAINERS_LOSERS',
      apiKey: API_KEY,
  });
  return response.data as TopGainersAndLosers;
};
