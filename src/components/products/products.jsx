import * as React from 'react';
// import { Paper } from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Card, Typography } from '@mui/material';

function Products() {
  // let products;
  // fetch('http://localhost:3001/products')
  //   .then((response) => response.json())
  //   .then((data) => (products = data))
  //   .then(() => console.log(products));

  // const axios = require('axios');

  // axios.get('http://localhost:3001/products').then((resp) => {
  //   console.log(resp.data);
  // });
  //////////1
  // getRequest();
  // async function data await aiox imported function await cont products
  //use top function useffect data
  // MAP RUU STATE
  //redux
  return (
    <Card
      sx={{
        overflow: 'unset',
        backgroundColor: '#FFFFFF',
        height: '327px',
        textAlign: 'center',
        width: '218px',
        borderRadius: '23px',
        marginTop: '50px',
        boxShadow:
          '1px 2px 2px rgba(143, 158, 163, 0.2), 2px 4px 4px rgba(143, 158, 163, 0.2), 4px 8px 8px rgba(143, 158, 163, 0.2), 8px 16px 16px rgba(143, 158, 163, 0.2), 16px 32px 32px rgba(143, 158, 163, 0.2)',
      }}
    >
      <Box
        component='img'
        sx={{
          height: 168,
          width: 168,
          borderRadius: '50%',
          marginTop: '-40px',
          left: 25,
        }}
        alt='product image'
        src='https://globalassets.starbucks.com/assets/17f8efcbdbc8476e9992503d4ee19f95.jpg?impolicy=1by1_tight_288'
        loading='lazy'
      />
      <Typography
        sx={{
          width: '172px',
          height: '76px',
          fontSize: '18px',
          fontWeight: '400',
          color: '#404040',
          fontFamily: 'vazir',
          margin: '1rem auto 0 auto',
        }}
      >
        نوشیدنی فراپوچینو با کوکی خرد شده
      </Typography>
      <Typography
        sx={{
          width: '137px',
          height: '22px',
          color: '#006341',
          direction: 'rtl',
          fontFamily: 'vazir',
          margin: '1rem auto 0 auto',
        }}
      >
        55000 تومان
      </Typography>
      <Button
        variant='contained'
        onClick={() => {
          alert('clicked');
        }}
        sx={{
          ':hover': {
            backgroundColor: '#00A76A',
          },
          backgroundColor: '#006341',
          borderRadius: '23px',
          width: 189,
          height: 38.37,
          marginTop: '1rem',
        }}
      >
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: '400',
          }}
        >
          افزودن به سبد
        </Typography>
      </Button>
    </Card>
  );
}

export default Products;
