import React from 'react';
import { Box, Typography } from '@mui/material';
import jobs from '../../asset/jobs.svg';
import arrow from '../../asset/arrow.svg';

const MatchesJob = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        bgcolor: '#f5f5f5',
        padding: { xs: 2, sm: 3, md: 5 }, // Adjust padding for small and medium screens
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, // Adjust width for different screen sizes
          justifyContent: 'center',
          mt: { xs: 6, sm: 8, md: 10 }, // Adjust top margin for different screens
        }}
      >
        <Box sx={{ marginBottom: 2 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '20px', sm: '24px', md: '28px' }, // Responsive font size
              textAlign: { xs: 'center', sm: 'left' }, // Center text for small screens
            }}
          >
            Matched Jobs
          </Typography>

          <Typography
            sx={{
              color: 'text.secondary',
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              textAlign: { xs: 'center', sm: 'left' },
            }}
          >
            Review and apply to jobs you've matched with
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#fff',
            boxShadow: 2,
            borderRadius: 2,
            padding: { xs: 2, sm: 3, md: 4 }, // Adjust padding
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '12px', sm: '12px', lg: '20px' },
                }}
              >
                Journeyman Plumber
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    bgcolor: 'rgb(3, 129, 52)',
                    borderRadius: 1,
                    padding: { xs: 0.5, sm: 1.5 },
                  }}
                >
                  <Typography
                    sx={{
                      color: '#fff',
                      cursor: 'pointer',
                      fontSize: { xs: '10px', sm: '10px', md: '16px' },
                    }}
                  >
                    Mark as applied
                  </Typography>
                </Box>
                <Box sx={{ rotate: 180, '& img': { width: {  xs: '20px', sm: '25px',  lg: '30px' } } }}>
                  <img src={arrow} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={jobs} alt="" style={{ width: '20px' }} />
              <Typography
                sx={{
                  fontSize: { xs: '12px', sm: '14px', md: '16px' },
                  marginLeft: '5px',
                }}
              >
                G&C Plumbing & Heating LLC
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={jobs} alt="" style={{ width: '20px' }} />
              <Typography
                sx={{
                  fontSize: { xs: '12px', sm: '14px', md: '16px' },
                  marginLeft: '5px',
                }}
              >
                Bellingham, MA, US
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src={jobs} alt="" style={{ width: '20px' }} />
              <Typography
                sx={{
                  fontSize: { xs: '12px', sm: '14px', md: '16px' },
                  marginLeft: '5px',
                }}
              >
                $72,800 - $115,000
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MatchesJob;
