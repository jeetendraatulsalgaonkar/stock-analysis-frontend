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

export type Ticker = {
  ticker_id?: string,
  ticker_name?: string,
  ticker_type?: string,
  market?: string,
  locale?: string,
  primary_exchange?: string,
  active: boolean,
  currency_name?: string,
  cik?: string,
  composite_figi?: string,
  share_class_figi?: string,
  last_updated_utc?: string,
  currency_symbol?: string,
  base_currency_symbol?: string,
  base_currency_name?: string,
  source_feed?: string,
};

export type Options = {
  ticker_id?: string,
  ticker_name?: string,
  ticker_type?: string,
  market?: string,
};
