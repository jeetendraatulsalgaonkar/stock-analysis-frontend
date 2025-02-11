import { ReactElement } from 'react';
import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import NavigationDrawer from './NavigationDrawer/NavigationDrawer';
import { Grid2 } from '@mui/material';

const App = (): ReactElement => {
  return (
    <Grid2 container>
      <Grid2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Grid2>
    </Grid2>
  );
};

export default App;
