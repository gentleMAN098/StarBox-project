import React from 'react';
import Produtcs from './components/products/products.jsx';
import { Paper } from '@mui/material';
import Navbar from './components/layout/navbar';

import './App.css';
import { getRequest } from './services/core/interceptor.js';
import Sidebar from './components/layout/sidebar.js';

function App() {
  // getRequest();
  return (
    <Paper
      sx={{
        width: '100%',
        background: '#006341',
        padding: '30px',
        borderRadius: 0,
      }}
    >
      <Paper
        sx={{
          background:
            'linear-gradient(to bottom, #EAEFF1 57.81%, #C5D5CF 100%)',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '23px',
        }}
      >
        <Navbar />
        <Paper
          elevation={0}
          sx={{
            background: 'transparent',
            display: 'flex',
            flexDirection: 'row',
            flex: 'auto',
          }}
        >
          <Paper
            elevation={0}
            sx={{
              background: 'transparent',
              width: '29vw',
            }}
          >
            <Sidebar />
          </Paper>
          <Paper
            elevation={0}
            sx={{
              background: 'transparent',
              display: 'grid',
              flex: 'auto',
              gridTemplateColumns: '1fr 1fr 1fr',
              padding: '0px 105px',
            }}
          >
            <Produtcs sx={{}} />
            <Produtcs sx={{}} />
            <Produtcs sx={{}} />
            <Produtcs sx={{}} />
            <Produtcs sx={{}} />
            <Produtcs sx={{}} />
            <Produtcs sx={{}} />
            <Produtcs sx={{}} />
            <Produtcs sx={{}} />
            <Produtcs sx={{}} />
            <Produtcs sx={{}} />
            <Produtcs sx={{}} />
            <Produtcs sx={{}} />
          </Paper>
        </Paper>
      </Paper>
    </Paper>
  );
}

export default App;
