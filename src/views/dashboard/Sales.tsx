// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const Sales = () => {

  const options = {
    optionsMixedChart: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },
      stroke: {
        width: [4, 0, 0]
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
      },
      markers: {
        size: 6,
        strokeWidth: 3,
        fillOpacity: 0,
        strokeOpacity: 0,
        hover: {
          size: 8
        }
      },
      yaxis: {
        tickAmount: 5,
        min: 0,
        max: 100
      }
    },
    seriesMixedChart: [
      {
        name: "series-1",
        type: "line",
        data: [30, 40, 25, 50, 49, 21, 70, 51]
      },
      {
        name: "series-2",
        type: "column",
        data: [23, 12, 54, 61, 32, 56, 81, 19]
      },
      {
        name: "series-3",
        type: "column",
        data: [62, 12, 45, 55, 76, 41, 23, 43]
      }
    ],
    optionsRadial: {
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },
  
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -20,
              show: true,
              color: "#888",
              fontSize: "13px"
            },
            value: {
              formatter: function (val: any) {
                return val;
              },
              color: "#111",
              fontSize: "30px",
              show: true
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Percent"]
    },
    seriesRadial: [76],
    optionsBar: {
      chart: {
        stacked: true,
        stackType: "100%",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 0
      },
      xaxis: {
        categories: ["Fav Color"],
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      fill: {
        opacity: 1,
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.35,
          gradientToColors: undefined,
          inverseColors: false,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [90, 0, 100]
        }
      },
  
      legend: {
        position: "bottom",
        horizontalAlign: "right"
      }
    },
    seriesBar: [
      {
        name: "blue",
        data: [32]
      },
      {
        name: "green",
        data: [41]
      },
      {
        name: "yellow",
        data: [12]
      },
      {
        name: "red",
        data: [65]
      }
    ]
  };

  return (
    <Card>
      <CardHeader
        title='Sales Statistics'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
        subheader="Top Selling Countries"
      />

      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
        <ReactApexcharts type='line' width={500} options={options.optionsMixedChart} series={options.seriesMixedChart} />
      </CardContent>
    </Card>
  )
}

export default Sales
