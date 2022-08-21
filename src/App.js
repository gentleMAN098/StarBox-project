import React from 'react';
import Produtcs from './components/products/products.jsx';
import { Paper } from '@mui/material';
import Navbar from './components/layout/navbar';
import './App.css';

function App() {
  return (
    <Paper
      sx={{
        padding: '1rem',
        height: '100vh',
        width: '100vw',
        background: '#006341',
      }}
    >
      <Paper
        sx={{
          background:
            'linear-gradient(to bottom, #EAEFF1 57.81%, #C5D5CF 100%)',
          border: 'none',
          margin: '0',
          width: '98%',
          height: '98vh',
        }}
      >
        {/* <Navbar
          sx={{
            display: 'block',
          }}
        /> */}
        {/* <Paper
          sx={{
            background: 'transparent',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
          }}
        >
          <Produtcs
            sx={{
              margin: '0 auto 0 auto',
            }}
          /> */}
        {/* </Paper> */}
      </Paper>
    </Paper>
  );
}

export default App;
