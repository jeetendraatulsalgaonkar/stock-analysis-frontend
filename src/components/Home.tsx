import { ReactElement } from 'react';
import { Grid2 } from "@mui/material";
import StockSearch from "./StockSearch/StockSearch";

const Home = (): ReactElement => {
  return (
    <Grid2
      container
      spacing={2}
      sx={{
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop: '35px',
      }}
      flexGrow={1}
      display="flow"
      border="none"
    >
      <Grid2>
        <StockSearch />
      </Grid2>
    </Grid2>
  );
}

export default Home;
