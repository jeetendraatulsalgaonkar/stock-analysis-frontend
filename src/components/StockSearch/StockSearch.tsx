import { ReactElement } from 'react';
import {Autocomplete, InputAdornment, TextField} from '@mui/material';
import { Search } from '@mui/icons-material';

const StockSearch = (): ReactElement => {
  return (
    <Autocomplete
      fullWidth
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Stock Symbol..."
          variant="outlined"
          slotProps={{
            input: {
              ...params.InputProps,
              type: 'search',
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            },
          }}
        />
      )}
      options={top100Films.map((s) => s.title)}
    />
  );
};

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
];

export default StockSearch;
