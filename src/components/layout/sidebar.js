import { Avatar, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Sidebar() {
  return (
    <Paper
      variant='none'
      elevation={0}
      sx={{
        background: 'transparent',
        position: 'fixed',
      }}
    >
      {/* empty basket */}
      <Box
        sx={{
          background: 'transparent',
          width: '29vw',
          height: '646px',
          borderRight: '3px solid',
          border: 'linear-gradient(to bottom, #EAEFF1 57.81%, #C5D5CF 100%)',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            background: 'yellow',
          }}
        >
          <Box sx={{}}>
            <Box
              component='img'
              sx={{
                height: 74,
                width: 67,
              }}
              alt='basket outer'
              src='vector01.svg'
              loading='lazy'
            />
            <Box
              sx={{
                position: ' relative',
              }}
            >
              <Box
                component='img'
                sx={{
                  height: 20,
                  width: 33,
                  position: 'absolute',
                  bottom: '27px',
                  left: '43%',
                }}
                alt='basket inner'
                src='vector02.svg'
                loading='lazy'
              />
            </Box>
          </Box>
          <Typography
            variant='body1'
            // color='initial'
            sx={{
              fontSize: '32px',
              fontWeight: 400,
              maxWidth: '243px',
              color: '#404040',
            }}
          >
            سبد خرید شما خالی است
          </Typography>
        </Box>
      </Box>
      {/* order basket */}
    </Paper>
  );
}
export default Sidebar;
