import React from 'react';
import Produtcs from './components/products/products.jsx';
import { Paper } from '@mui/material';
import './App.css';

function App() {
  return (
    <Paper
      sx={{
        background: 'linear-gradient(to bottom, #EAEFF1 57.81%, #C5D5CF 100%)',
        width: '98%',
        margin: '1rem auto 0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        position: 'relative',
      }}
    >
      <Produtcs
        sx={{
          position: 'absulute',
          margin: '1rem auto 0 auto',
        }}
      />
    </Paper>
  );
}

export default App;
