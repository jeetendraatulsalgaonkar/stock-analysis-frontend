import { ReactElement } from 'react';
import { Grid2 } from "@mui/material";
import StockSearch from "./StockSearch/StockSearch";

const Home = (): ReactElement => {
  return (
    <Grid2
      container
      spacing={2}
      size={50}
      direction="row"
      sx={{
        justifyContent: 'center',
        alignItems: 'stretch',
      }}
      flexGrow={1}
      flexDirection="row"
      display="flow"
      border="none"
    >
      <Grid2 size={50}>
        <StockSearch />
      </Grid2>
    </Grid2>
  );
}

export default Home;
