// ** React Imports
import { ReactElement } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const MapCard = () => {
  return (
    <Card>
      <CardHeader
        title='United States'
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          <img src={'images/us-map.jpg'} alt={'us-map'} width={'340px'}  />
        </Grid>
      </CardContent>
    </Card>
  )
}

export default MapCard
