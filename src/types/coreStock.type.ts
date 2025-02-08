export type StocksBrief = {
  ticker: string;
  price: string;
  change_amount: string;
  change_percentage: string;
  volume: string;
};

export type TopGainersAndLosers = {
  metadata: string,
  last_updated: string,
  top_gainers: StocksBrief[],
  top_losers: StocksBrief[],
  most_actively_traded: StocksBrief[],
};
