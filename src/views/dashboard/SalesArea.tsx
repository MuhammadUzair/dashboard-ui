import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ReactApexcharts from 'src/@core/components/react-apexcharts'


const SalesArea = () => {
  const data =  {
    optionsMixedChart: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      dataLabels: {
        enabled: false
      },
    },
    seriesMixedChart: [
      {
        name: "series-1",
        type: "area",
        data: [30, 40, 25, 50, 49, 21, 70, 51]
      },
      {
        name: "series-2",
        type: "area",
        data: [23, 12, 54, 61, 32, 56, 81, 19]
      },
      {
        name: "series-3",
        type: "area",
        data: [62, 12, 45, 55, 76, 41, 23, 43]
      }
    ],
  };
  
return (
    <Card>
    <CardHeader
      title='Sales Statistics'
      titleTypographyProps={{
        sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
      }}
    />

    <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
    <Typography variant='body2' sx={{ mr: 4 }}>Top Selling Countries</Typography>
      
      <ReactApexcharts type='area' width={300} options={data.optionsMixedChart} series={data.seriesMixedChart}
       />
    </CardContent>
  </Card>
  )
}

export default SalesArea
