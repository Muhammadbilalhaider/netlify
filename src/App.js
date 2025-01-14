import './App.css';
import Navbar from './reuseable-components/navbar/navbar'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'
import DailyJobs from './components/daily-jobs/dailyJobs';
import AppliedJobs from './components/applied-jobs/appliedJobs'
import SkipJobs from './components/skip-jobs/skipJobs'
import MatchesJob from './components/match-jobs/matchesJob'
import PreferecesJob from './components/preferences-jobs/preferencesJobs'
import { Box } from '@mui/material';
function App() {
  return (
  
    <Box sx={{ backgroundColor: '#0021', minHeight: '100vh' }}>
     
      <Router >
      <Navbar />
      <Box x={{ marginBototm: '64px' }}>
        <Routes >
          <Route path='/daily-jobs' element={<DailyJobs />} />
          <Route path='/applied-jobs' element={<AppliedJobs />} />
          <Route path='/matches-jobs' element={<MatchesJob />} />
          <Route path='/skip-jobs' element={< SkipJobs />} />
          <Route path='/preferences-jobs' element={< PreferecesJob />} />
        </Routes>
        </Box>
      </Router>
   </Box>
  );
}

export default App;
