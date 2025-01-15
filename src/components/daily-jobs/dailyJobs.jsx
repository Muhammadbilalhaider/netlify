import React from 'react';
import jobs from '../../asset/jobs.svg';
import { Typography, Box, Toolbar, Button } from '@mui/material';

const dailyJobs = () => {
  const keyResponsibilities = [
    "Run service calls for residential customers.",
    "Perform faucet and toilet repairs or replacements.",
    "Conduct water heater maintenance and installations.",
    "Handle boiler maintenance and installations.",
    "Diagnose and resolve various plumbing issues.",
    "Build relationships with a loyal customer base.",
  ];

  const keyRequirements = [
    "Valid Journeyman Plumbing License (MA).",
    "Valid Driver’s License.",
    "A customer-focused attitude and commitment to quality work.",
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        px: { xs: 2, md: 5 },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, mb: 15, flexDirection: 'column', alignItems: 'center' }}>

        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', mb: 2, mr: 20, cursor: 'pointer' }}>
          <Typography variant="h6" sx={{ textAlign: 'right' }}>
            today's job
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            background: '#fff',
            width: { xs: '90%', md: '70%' },
            boxShadow: 2,
            borderRadius: 2,
            p: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#000',
              fontWeight: 'bold',
              mb: 2,
            }}
          >
            Journeyman Plumber
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent:'space-between',
              alignItems:'self-start',
              width: '70%',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', minWidth: '150px' }}>
              <img
                src={jobs}
                alt=""
                style={{ width: '30px', height: '30px', flexShrink: 0 }}
              />
              <Typography
                sx={{ fontSize: '14px', marginLeft: '10px', whiteSpace: 'nowrap' }}
              >
                G&C Plumbing & Heating LLC
              </Typography>
            </Box>

            <Box sx={{ display: 'flex',  alignItems: 'center', minWidth: '150px' }}>
              <img
                src={jobs}
                alt=""
                style={{ width: '30px', height: '30px', flexShrink: 0 }}
              />
              <Typography
                sx={{ fontSize: '14px', marginLeft: '10px', whiteSpace: 'nowrap' }}
              >
                Bellingham, MA, US
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent:'space-between',
              width: '70%',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', minWidth: '150px' }}>
              <img
                src={jobs}
                alt=""
                style={{ width: '30px', height: '30px', flexShrink: 0 }}
              />
              <Typography
                sx={{ fontSize: '14px', marginLeft: '10px', whiteSpace: 'nowrap' }}
              >
                $72,800 - $115,000
              </Typography>
            </Box>

            <Box sx={{ display: 'flex',  alignItems: 'center', minWidth: '150px' }}>
              <img
                src={jobs}
                alt=""
                style={{ width: '30px', height: '30px', flexShrink: 0 }}
              />
              <Typography
                sx={{ fontSize: '14px', marginLeft: '10px', whiteSpace: 'nowrap' }}
              >
              $72,800 - $115,000
              </Typography>
            </Box>
          </Box>
        

          <Box sx={{ width: '100%', my: 2 }}>
            <hr style={{ border: '1px solid #A9A9A9', width: '100%' }} />
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            About G&C Plumbing & Heating LLC
          </Typography>
          <Typography sx={{ color: '#3F3B3B', lineHeight: 1.5 }}>
            G&C Plumbing & Heating is a company dedicated to providing exceptional plumbing services while fostering a supportive and growth-oriented work environment.
          </Typography>

          <Box sx={{ width: '100%', my: 2 }}>
            <hr style={{ border: '1px solid #A9A9A9', width: '100%' }} />
          </Box>

          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Position Overview
          </Typography>
          <Typography sx={{ color: '#3F3B3B', lineHeight: 1.5 }}>
            The Journeyman Plumber will provide top-notch plumbing services to residential customers, focusing on service calls and maintenance. The role offers growth opportunities, competitive pay, and a supportive team culture.
          </Typography>



          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
            Key Responsibilities
          </Typography>

          {keyResponsibilities.map((responsibility, index) => (
            <ul>
              <li key={index}>{responsibility}</li>
            </ul>
          ))}


          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, mt: 3 }}>
            Requirements
          </Typography>

          {keyRequirements.map((requirement, index) => (
            <ul> <li key={index}>{requirement}</li>   </ul>
          ))}


          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, mt: 3 }}>
            Soft Skills
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1 }}>
            <Box sx={{ bgcolor: '#F3E4D5', p: 1, borderRadius: 1 }}>
              <Typography sx={{ color: '#F0874B', textAlign: 'center' }}>Customer-focused attitude</Typography>
            </Box>
            <Box sx={{ bgcolor: '#F3E4D5', p: 1, borderRadius: 1 }}>
              <Typography sx={{ color: '#F0874B', textAlign: 'center' }}>Commitment to quality work</Typography>
            </Box>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, mt: 3 }}>
            Required Technologies
          </Typography>



        </Box>

      </Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: 50,

          width: '100%',
          bgcolor: '#fff',
          boxShadow: 2,
          py: 2,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',

            px: { xs: 2, md: 5 },
          }}
        >
          <Button
            variant="outlined"
            color="warning"
            sx={{
              px: 3, mr: 1
            }}
          >
            Skip
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              px: 3, ml: 1, bgcolor: 'rgb(3, 129, 52)'
            }}
          >
            Match
          </Button>
        </Toolbar>
      </Box>
    </Box>
  );
};

export default dailyJobs;
