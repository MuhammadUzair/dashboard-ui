// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import SalesArea from 'src/views/dashboard/SalesArea'

// import TotalEarning from 'src/views/dashboard/TotalEarning'
import AcadmicPerformance from 'src/views/dashboard/AcadmicPerformance'

import StatisticsBar from 'src/views/dashboard/StatisticsBar'
import MapCard from 'src/views/dashboard/MapCard'
import Sales from 'src/views/dashboard/Sales'
import LearnActivity from 'src/views/dashboard/LearnActivity'

const Dashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <SalesArea />
        </Grid>
        <Grid item xs={6} md={4}>
          <StatisticsBar />
        </Grid>
        <Grid item xs={6} md={4}>
          <MapCard />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <Sales />
          <LearnActivity />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          {/* <TotalEarning /> */}
          <AcadmicPerformance />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Dashboard
