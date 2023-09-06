import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import ReactApexcharts from 'src/@core/components/react-apexcharts'


const StatisticsBar = () => {
  const data =  {
    optionsMixedChart: {
      chart: {
        height: 440,
        stacked: true
      },

      colors: ['#2980b9', '#2ecc71'],
      plotOptions: {
        bar: {
          borderRadius: 5,
          borderRadiusApplication: 'end', // 'around', 'end'
          borderRadiusWhenStacked: 'all', // 'all', 'last'
          horizontal: true,
          barHeight: '80%',
        },
      },

      grid: {
        xaxis: {
          lines: {
            show: false
          }
        }
      },
      yaxis: {
        min: -5,
        max: 5,
        title: {
          // text: 'Age',
        },
      },
      tooltip: {
        shared: false,
        x: {
          formatter: function (val: any) {
            return val
          }
        },
        y: {
          formatter: function (val: number) {
            return Math.abs(val) + "%"
          }
        }
      },
      dataLabels: {
        enabled: false
      },

    },

     
    seriesMixedChart: [
      {
        name: 'Males',
        type: "bar",
        data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5,
          3.9, 3.5, 3
        ]
      },
      {
        name: 'Females',
        type: "bar",
        data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4,
          -4.1, -4, -4.1, -3.4, -3.1, -2.8
        ]
      },
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
      
      <ReactApexcharts type='bar' width={300} options={data.optionsMixedChart} series={data.seriesMixedChart}
       />
    </CardContent>
  </Card>
  )
}

export default StatisticsBar
