import React from 'react';
import Produtcs from './components/products/products.jsx';
import { Paper } from '@mui/material';
import './App.css';
import Navbar from './components/layout/navbar';

function App() {
  return (
    <Paper
      sx={{
        background: 'linear-gradient(to bottom, #EAEFF1 57.81%, #C5D5CF 100%)',
        margin: '1rem auto 0 auto',
        width: '98%',
      }}
    >
      <Navbar
        sx={{
          display: 'block',
        }}
      />
      <Paper
        sx={{
          background: 'transparent',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
        }}
      >
        <Produtcs
          sx={{
            margin: '1rem auto 0 auto',
          }}
        />
      </Paper>
    </Paper>
  );
}

export default App;
