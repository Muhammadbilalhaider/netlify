import { Box, Button, Checkbox, Typography } from '@mui/material'
import React from 'react'

const preferencesJobs = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', justifyItems: 'center', alignItems: 'center', pb: 18 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '90%', sm: '80%', md: '70%', lg: '60%' }, mt: 6, justifyContent: 'center', alignContent: 'center' }}>
        <Typography variant='h5' sx={{ textAlign: { xs: 'center', sm: 'left' }, fontWeight: 'bold' }} >Job Preferences</Typography>

        {/* Form  */}

        <Box sx={{
          display: 'flex', flexDirection: 'column', width: '100%', mt: 3, '& input': {
            fontSize: {  sm: '12px', lg: '16px' },
            textDecoration: 'none', border: 'none', outline: 'none', padding: '10px', borderRadius: 2
          },
        }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 'semibold' }} >Job Titles</Typography>
          <input type='text' placeholder='e.g Software Engineer, Frontend Developer' />
          <Typography sx={{ fontWeight: 'semibold', fontSize: '15px', color: '#808080' }} >Separate multiple titles with commas</Typography>
        </Box>

        <Box sx={{
          display: 'flex', flexDirection: 'column', width: '100%',    mt:2, '& input': {
            fontSize: {  sm: '12px', lg: '16px' },
            textDecoration: 'none', border: 'none', outline: 'none', padding: '10px', borderRadius: 2
          },
        }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 'semibold' }} >Preferred Companies</Typography>
          <input type='text' placeholder='e.g Google, Microsoft, Amazon' />
          <Typography sx={{ fontWeight: 'semibold', fontSize: '15px', color: '#808080' }} >Separate multiple titles with commas</Typography>
        </Box>

        <Box sx={{
          display: 'flex', flexDirection: 'column', width: '100%',    mt:2, '& input': {
            fontSize: {  sm: '12px', lg: '16px' },
            textDecoration: 'none', border: 'none', outline: 'none', padding: '10px', borderRadius: 2
          },
        }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 'semibold' }} >Preferred Locations</Typography>
          <input type='text' placeholder='e.g San Francisco, New York, Remote' />
          <Typography sx={{ fontWeight: 'semibold', fontSize: '15px', color: '#808080' }} >Separate multiple titles with commas</Typography>
        </Box>
      




        <Box sx={{
          display: 'flex', flexDirection: 'column', width: '100%',    mt:2, 
          '& input': {
            fontSize: {  sm: '12px', lg: '16px' },
            textDecoration: 'none', border: 'none', outline: 'none', padding: '10px', borderRadius: 2
          },
        }}>
          <Typography sx={{ fontSize: '16px', fontWeight: 'semibold' }} >Technologies</Typography>
          <input type='text' placeholder='e.g React js, TypeScript, Node js' />
          <Typography sx={{ fontWeight: 'semibold', fontSize: '15px', color: '#808080' }} >Separate multiple titles with commas</Typography>
        </Box>


        <Box sx={{ display: 'flex', flexDirection: 'column', widows: '100%', mt: 3,
            '& input': {
              fontSize: {  sm: '12px', lg: '16px' },
              textDecoration: 'none', border: 'none', outline: 'none', padding: '10px', borderRadius: 2
            },
         }}>
          <Typography sx={{ fontWeight: 'semibold' }} >Salary Range</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <input type='number' placeholder='0' style={{ width: '43%', textDecoration: 'none', fontSize: '16px', border: 'none', outline: 'none', padding: '10px', borderRadius: 10 }} />
            <input type='number' placeholder='300,000' style={{ width: '43%', textDecoration: 'none', fontSize: '16px', border: 'none', outline: 'none', padding: '10px', borderRadius: 10 }} />
          </Box>

        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', widows: '100%', mt: 1 }}>
          <Checkbox value={''} style={{ transform: 'scale(0.8)', padding: 0, }} />
          <Typography sx={{ fontWeight: 'semibold', fontSize: '14px' }} >Open to remote positions</Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', widows: '100%', mt: 1 }}>

          <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

            <Button sx={{ width: '100%', bgcolor: 'blue', margin: 2, color: 'white', textTransform: 'none', fontWeight: 'bold', fontSize: '14px' }}>Save Preferences</Button>
          </Box>

        </Box>




      </Box>
    </Box>
  )
}

export default preferencesJobs