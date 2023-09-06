// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'
import ReactApexcharts from 'src/@core/components/react-apexcharts'
import { Grid } from '@mui/material'

const data = {          
  series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
  options: {
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Product Trends by Month',
      align: 'left'
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
  },


};

const AcadmicPerformance = () => {
  return (
    <Card>
      <CardHeader
        title='Acadmic Performance'
        titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
        subheader="Avg 72% compeleted lessons"
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(2.25)} !important` }}>
      <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
          <Typography variant='body2' sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
            Mathematics
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              4
            </Grid>
          <Grid item xs={4}>
            <LinearProgress color={'error'} value={50} 
            variant='determinate' 
            sx={{ mt: 2  }}
             />
          </Grid>
          <Grid item xs={1}>
          73%
          </Grid> 
        </Grid>
               
      </Box>
        <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
           <ReactApexcharts options={data} series={data.series}  type="line"
              width="500" />
           </Box>

      </CardContent>
    </Card>
  )
}

export default AcadmicPerformance
