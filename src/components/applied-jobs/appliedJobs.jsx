import React from 'react'
import { Box, Button, MenuItem, Select, Typography } from '@mui/material'
import jobs from '../../asset/jobs.svg';
import arrow from '../../asset/arrow.svg'

const appliedJobs = () => {
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
      <Box sx={{ display: 'flex', width: '90%', flexDirection: 'column', justifyContent: 'center', mt: 10 }}>

        <Box sx={{ flexDirection: 'column', marginBottom: 2 }}>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              alignSelf: 'flex-start',
            }}
          >
            Applied Jobs
          </Typography>


          <Typography sx={{ color: 'text.secondary', alignSelf: 'flex-start' }}>
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
            padding: 3,
          }}
        >

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>



              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Journeyman Plumber
              </Typography>

              <Box
                sx={{
                  borderRadius: 1,
                  color: '#000',
                  fontSize: '18px',
                  width:'200px',
                  justifyContent:'center',
                  alignItems:'center',
                  display:'flex',
                  flexDirection:'row'
                }}
              >
                <Select
              
                  sx={{
                    textTransform: 'none', 
                    fontSize: '14px',
                    color: '#000',
                    width: '100%', 
                    borderRadius:3
                  }}
                >
                  <MenuItem value="applies">Applies</MenuItem>
                  <MenuItem value="Phone screen">Phone screen</MenuItem>
                  <MenuItem value="Interview">Interview</MenuItem>
                  <MenuItem value="Offer">Offer</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                </Select>
  <Box sx={{rotate:180}} >
             <img  width='36px' src={arrow} alt='' />
             </Box>
        

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
  )
}

export default appliedJobs