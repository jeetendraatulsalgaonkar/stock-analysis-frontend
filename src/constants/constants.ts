import {GridColDef} from "@mui/x-data-grid-pro";

export const API_KEY = '4W8NAF930CRHG1F7';

export const ALPHAVANTAGE_BASE_URL_STRING = 'https://www.alphavantage.co/query';

export const COLUMNS: GridColDef[] = [
  {
    field: 'ticker_id',
    headerName: 'Symbol',
    minWidth: 150,
    width: 150,
    maxWidth: 200,
    editable: false,
  },
  {
    field: 'ticker_name',
    headerName: 'Company Name',
    minWidth: 300,
    width: 500,
    maxWidth: 1500,
    editable: false,
  },
  {
    field: 'market',
    headerName: 'Market',
    minWidth: 100,
    width: 100,
    maxWidth: 150,
    editable: false,
    filterable: false,
  },
  {
    field: 'locale',
    headerName: 'Location',
    minWidth: 150,
    width: 150,
    maxWidth: 200,
    editable: false,
    filterable: false,
  },
  {
    field: 'ticker_type',
    headerName: 'Type',
    minWidth: 150,
    width: 150,
    maxWidth: 200,
    editable: false,
    sortable: false,
    filterable: false,
  },
  {
    field: 'currency',
    headerName: 'Currency',
    minWidth: 150,
    width: 150,
    maxWidth: 200,
    editable: false,
    sortable: false,
    filterable: false,
  },
  {
    field: 'active',
    headerName: 'Active',
    minWidth: 150,
    width: 150,
    maxWidth: 200,
    editable: false,
    sortable: false,
    filterable: false,
  },
];
