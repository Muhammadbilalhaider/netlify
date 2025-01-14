import React from 'react';
import jobs from '../../asset/jobs.svg';

import { AppBar, Toolbar, Typography, Button, Box, colors } from '@mui/material';

const dailyJobs = () => {

  const keyResponsibilities = [
    "Run service calls for residential customers.",
    "Perform faucet and toilet repairs or replacements.",
    "Conduct water heater maintenance and installations.",
    "Handle boiler maintenance and installations.",
    "Diagnose and resolve various plumbing issues.",
    "Build relationships with a loyal customer base."
  ];

  const keyRequirements = [
    "Valid Journeyman Plumbing License (MA).",
    "Valid Driver’s License.",
    "A customer-focused attitude and commitment to quality work."
  ];



  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 15, mb: 18, alignItems: 'center', flexDirection: 'column' }}>


        <Box sx={{ width: '85%', display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Typography variant='h6' sx={{ textAlign: 'right' }}>Today's Job</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            background: '#fff',
            width: '70%',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#000',
              padding: '10px',
              fontWeight: 'bold',
              fontFamily: 'ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
            }}
          >
            Journeyman Plumber
          </Typography>

          <Box sx={{ display: 'flex', width: '60%', paddingLeft: '20px', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row' }}>
              <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <img src={jobs} alt="" style={{ width: '30px', height: '30px' }} />
                <Typography sx={{ fontSize: '14px', marginLeft: '10px' }}>
                  G&C Plumbing & Heating LLC
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 2 }}>
                <img src={jobs} alt="" style={{ width: '30px', height: '30px' }} />
                <Typography sx={{ fontSize: '14px', marginLeft: '10px' }}>
                  Bellingham, MA, US
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row' }}>
              <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 2 }}>
                <img src={jobs} alt="" style={{ width: '30px', height: '30px' }} />
                <Typography sx={{ fontSize: '14px', marginLeft: '10px' }}>
                  $72,800 - $115,000
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 2 }}>
                <img src={jobs} alt="" style={{ width: '30px', height: '30px' }} />
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: '100%', marginY: 1 }}>
            <hr style={{ border: '1px solid #A9A9A9', margin: '30px 0', width: '100%' }} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%',pl:2  }}>
            <Typography
              variant=''
              sx={{
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'rgb(63, 59, 59)',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
              }}
            >
              About G&C Plumbing & Heating LLC
            </Typography>

            <Typography
              variant=''
              sx={{
                color: 'rgb(63, 59, 59)',
                mt: 1,
                width: '90%',
                lineHeight: 1.5,
                fontFamily: 'ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
              }}
            >
              G&C Plumbing & Heating is a company dedicated to providing exceptional plumbing services while fostering a supportive and growth-oriented work environment.
            </Typography>
          </Box>

          <Box sx={{ width: '100%', marginY: 1 }}>
            <hr style={{ border: '1px solid #A9A9A9', margin: '30px 0', width: '100%' }} />
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%',pl:2 }} >
            <Typography
              variant=''
              sx={{
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'rgb(63, 59, 59)',
                fontFamily: 'ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
              }}
            >
              Position Overview
            </Typography>

            <Typography
              variant=''
              sx={{
                color: 'rgb(63, 59, 59)',
                mt: 1,
                width: '90%',
                lineHeight: 1.5,
                fontFamily: 'ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
              }}
            >
              The Journeyman Plumber will provide top-notch plumbing services to residential customers, focusing on service calls and maintenance. The role offers growth opportunities, competitive pay, and a supportive team culture.
            </Typography>

            <Box sx={{ display: 'flex', width: '100%', flexDirection: 'row' }}>
              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center', marginTop: 2 }}>
                <img src={jobs} alt="" style={{ width: '30px', height: '30px' }} />
                <Box sx={{ display: 'flex', mt: 2, justifyContent: 'flex-start', alignItems: 'start', flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: '14px', marginLeft: '10px' }}>Experience Required</Typography>
                  <Box sx={{ display: 'flex', width: '100%', justifyContent: 'start', alignItems: 'start' }}>
                    <Typography sx={{ fontSize: '14px', marginLeft: '10px', textAlign: 'start' }}>NaN</Typography>
                  </Box>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-start', alignItems: 'center', marginTop: 2 }}>
                <img src={jobs} alt="" style={{ width: '30px', height: '30px' }} />
                <Box sx={{ display: 'flex', mt: 2, justifyContent: 'flex-start', alignItems: 'start', flexDirection: 'column' }}>
                  <Typography sx={{ fontSize: '14px', marginLeft: '10px', pt: 3 }}>Work Schedule</Typography>
                  <Box sx={{ display: 'flex', width: '100%', justifyContent: 'start', alignItems: 'start' }}>
                    <Typography sx={{ fontSize: '14px', marginLeft: '10px', textAlign: 'start', width: '80%' }}>
                      Flexible 8-hour shifts, day shift, rotating weekends, year-round work
                    </Typography>
                  </Box>
                </Box>

              </Box>



            </Box>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'column', pl:2}}>
            <Box sx={{ display: 'flex', mt: 2, justifyContent: 'flex-start', alignItems: 'start', flexDirection: 'column' }}>

              <Typography variant='h6' sx={{fontWeight:'bold'}}>
                Key Responsibilities
              </Typography>

              {keyResponsibilities.map((value, index) =>
                <ul>
                  <li key={index}>
                    {value}
                  </li>
                </ul>
              )}


            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' ,pl:2 }}>
            <Box sx={{ display: 'flex', mt: 2, justifyContent: 'flex-start', alignItems: 'start', flexDirection: 'column' }}>

              <Typography variant='h6' sx={{fontWeight:'bold'}}>
              Requirements
              </Typography>

              {keyRequirements.map((value, index) =>
                <ul>
                  <li key={index}>
                    {value}
                  </li>
                </ul>
              )}


            </Box>
          </Box>


          <Box sx={{ display: 'flex', flexDirection: 'column', pl:2}}>
            <Box sx={{ display: 'flex', mt: 2, justifyContent: 'flex-start', alignItems: 'start', flexDirection: 'column' }}>

              <Typography variant='h6' sx={{fontWeight:'bold'}}>
                Soft Skills
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    bgcolor: 'rgb(243, 228, 213)',
                    borderRadius: 2,
                   
                    mx: 1,
                    p: 1,
                  }}>
                  <Typography variant='' sx={{fontWeight:'semibold',justifyItems:'center',alignItems:'center',textAlign:'center',  color: 'rgb(240, 135, 75)'}}>
                    Customer-focused attitude
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    bgcolor: 'rgb(243, 228, 213)',
                    borderRadius: 2,
                   
                    mx: 1,
                    p: 1,
                  }}>
                  <Typography variant='' sx={{fontWeight:'semibold',justifyItems:'center',alignItems:'center',textAlign:'center',  color: 'rgb(240, 135, 75)'}}>
                  Commitment to quality work
                  </Typography>
                </Box>
              </Box>



            </Box>
          </Box>

          <Box sx={{display:'flex',flexDirection:'column',mt:2,pl:2}}>
            <Typography variant='h6' sx={{fontWeight:'bold'}}>Required Technologies</Typography>
          </Box>
          <Box sx={{ width: '100%', marginY: 1 }}>
            <hr style={{ border: '1px solid #A9A9A9', margin: '30px 0', width: '100%' }} />
          </Box>
        </Box>

      

      </Box>
    </Box>
  );
};

export default dailyJobs;
