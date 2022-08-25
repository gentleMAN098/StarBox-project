import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Navbar = () => {
  return (
    <AppBar
      variant='none'
      elevation={0}
      sx={{
        position: ' relative',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: '30px',
      }}
    >
      <Box>
        <Box
          component='img'
          sx={{ width: 40, height: 40 }}
          alt='Search Icon'
          src='search-icon.svg'
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Button
          sx={{
            fontWeight: '400',
            fontSize: 28,
            my: 2,
            mx: 2,
            color: '#404040',
          }}
        >
          همکاری
        </Button>
        <Button
          sx={{
            fontWeight: '400',
            fontSize: 28,
            my: 2,
            mx: 2,
            color: '#404040',
          }}
        >
          فروشگاه ها
        </Button>
        <Button
          sx={{
            fontWeight: '400',
            fontSize: 28,
            my: 2,
            mx: 2,
            color: '#404040',
            borderBottom: '6px solid #006341',
            borderRadius: '0px 0px 5px 5px',
          }}
        >
          منو
        </Button>

        <Box
          component='img'
          sx={{
            height: 71.07,
            width: 70.54,
            borderRadius: '50%',
            marginLeft: '30px',
          }}
          alt='starbox logo'
          src='Starbox-icon.svg'
        />
      </Box>
    </AppBar>
  );
};
export default Navbar;
