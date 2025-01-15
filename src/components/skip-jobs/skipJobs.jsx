import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import jobs from '../../asset/jobs.svg';

const skipjobs = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        bgcolor: '#f5f5f5',
      }}
    >
      <Box sx={{ display: 'flex', width: '60%', flexDirection: 'column', justifyContent: 'center', mt: 10 }}>

        <Box sx={{ flexDirection: 'column', marginBottom: 2 }}>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              alignSelf: 'flex-start',
            }}
          >
           Skipped Jobs
          </Typography>


          <Typography sx={{ color: 'text.secondary', alignSelf: 'flex-start' }}>
          Review jobs you've skipped - you can always change your mind!
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#fff',
            boxShadow: 2,
            borderRadius: 2,
            padding: 3,
          }}
        >

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>



              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Journeyman Plumber
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'row' }}>

                <Button
                  variant="outlined"
                  color="warning"
                  sx={{
                    px: 3, mr: 1,borderRadius:2
                  }}
                >
                  Skip
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    px: 3, ml: 1, bgcolor: 'rgb(3, 129, 52)',borderRadius:2
                  }}
                >
                  Match
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={jobs} alt="" style={{ width: '25px' }} />
              <Typography sx={{ fontSize: '16px', marginLeft: '5px' }}>
                G&C Plumbing & Heating LLC
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={jobs} alt="" style={{ width: '25px' }} />
              <Typography sx={{ fontSize: '16px', marginLeft: '5px' }}>
                Bellingham, MA, US
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={jobs} alt="" style={{ width: '25px' }} />
              <Typography sx={{ fontSize: '16px', marginLeft: '5px' }}>
                $72,800 - $115,000
              </Typography>
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default skipjobs;
