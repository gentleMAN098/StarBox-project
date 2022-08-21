import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        display: 'block',
        flexDirection: 'row',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            margin: 0,
            padding: 0,
            overflow: 'hidden',
          }}
        >
          <Box
            component='img'
            sx={{
              height: 71.07,
              width: 70.54,
              borderRadius: '50%',
              margin: '0.5rem auto',
              display: 'inline',
            }}
            alt='starbox logo'
            src='https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr'
          />

          <Button
            sx={{
              fontWeight: '400',
              fontSize: 28,
              my: 2,
              color: '#404040',
              display: 'inline',
            }}
          >
            منو
          </Button>
          <Button
            sx={{
              fontWeight: '400',
              fontSize: 28,
              my: 2,
              color: '#404040',
              display: 'inline',
            }}
          >
            فروشگاه ها
          </Button>
          <Button
            sx={{
              fontWeight: '400',
              fontSize: 28,
              my: 2,
              color: '#404040',
              display: 'inline',
            }}
          >
            همکاری
          </Button>
        </Box>

        <Box>
          <Box
            component='img'
            sx={{ display: 'inline', p: 0, width: 40, height: 40 }}
            alt='Search Icon'
            src='https://static.vecteezy.com/system/resources/previews/002/272/237/original/search-icon-simple-free-illustration-free-vector.jpg'
          />
        </Box>
      </Container>
    </AppBar>
  );
};
export default Navbar;
