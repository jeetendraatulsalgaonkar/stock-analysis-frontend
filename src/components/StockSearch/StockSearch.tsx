import {ReactElement, useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {allTickers, tickerSearch} from "../../services/company";
import { Ticker } from "../../types/coreStock.type";
import {DataGridPro, GridFilterModel, GridPaginationMeta, GridPaginationModel} from "@mui/x-data-grid-pro";
import { COLUMNS } from "../../constants/constants";

const StockSearch = (): ReactElement => {
  const [rows, setRows] = useState<Ticker[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    pageSize: 20,
    page: 1,
  });
  const [models, setModels] = useState<{
    filterModel: GridFilterModel;
  }>(() => ({
    filterModel: {
      items: [
        {
          field: 'ticker_id',
          operator: 'contains',
          value: '',
        },
      ],
    },
    rowSelectionModel: [5],
  }));

  const fetchStocks = useCallback(async () => {
    await allTickers(paginationModel.page, paginationModel.pageSize)
      .then((res) => {
        setRows(res.data);
        setPaginationModel({
          pageSize: res.pageProps.pageSize,
          page: res.pageProps.page,
        });
        setTotalPages(res.pageProps.totalPages);
      })
      .catch((err) => console.error(err));
  }, []);

  const fetchStocksByFilter = useCallback(async (queryString: string) => {
    await tickerSearch(queryString, paginationModel.page, paginationModel.pageSize)
      .then((res) => {
        setRows(res.data);
        setPaginationModel({
          pageSize: res.pageProps.pageSize,
          page: res.pageProps.page,
        });
        setTotalPages(res.pageProps.totalPages);
      })
      .catch((err) => console.error(err));
  }, []);

  const paginationMetaRef = useRef<GridPaginationMeta>(undefined);

  const paginationMeta = useMemo(() => {
    if (
      totalPages !== undefined &&
      paginationModel.page < totalPages
    ) {
      paginationMetaRef.current = { hasNextPage: true };
    }
    return paginationMetaRef.current;
  }, [paginationModel.page, totalPages]);

  useEffect(() => {
    fetchStocks();
  }, [fetchStocks]);

  const handleFilterModelChange = useCallback(
    (newFilterModel: GridFilterModel) => {
      fetchStocksByFilter(newFilterModel.items[0]?.value);
      setModels((prev) => ({ ...prev, filterModel: newFilterModel }));
    }, []);

  return (
    <DataGridPro
      columns={COLUMNS}
      rows={rows}
      estimatedRowCount={rows.length}
      pagination
      paginationModel={paginationModel}
      paginationMeta={paginationMeta}
      onPaginationModelChange={setPaginationModel}
      pageSizeOptions={[paginationModel.pageSize]}
      rowCount={rows.length}
      disableColumnSelector
      filterModel={models.filterModel}
      onFilterModelChange={handleFilterModelChange}
    />
  );
};

export default StockSearch;
