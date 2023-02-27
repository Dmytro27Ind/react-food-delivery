import React from 'react'
import { Paper, Typography, Box } from '@mui/material';
import ScooterImage from '../../assets/scooter.png'
import Image from '../../UI/Image';

const homeStyles = {
  headerPaper: {
    paper: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center'
    },
    box: {
      width: { xs: '90%', md: '50%' },
      display: 'flex',
      alignItems: 'center',
      p: {xs: 2, lg: 4},
      pt: {xs: 4, md: 8},
      pb: {xs: 4, md: 8},
      flexDirection: 'column',
      justifyContent: 'center'
    },
    imageBox: {
      width: { xs: '90%', md: '50%' },
      display: 'flex',
      alignItems: 'center',
      p: {xs:4, sm: 8, md: 2, lg: 8},
    },
    title: {
      fontWeight: 'bold',
      ml: { xs: 2, md: 3, lg: 6},
      mr: { xs: 2, md: 3, lg: 5}
    },
    subtitle: {
      ml: { xs: 2, md: 3, lg: 6},
      mr: { xs: 2, md: 3, lg: 5}
    },
    image: { width: '100%' }
  }
}

export default function HomePage() {
  return (
    <React.Fragment>
      <Paper elevation={3} sx={homeStyles.headerPaper.paper}>
        <Box sx={homeStyles.headerPaper.box}>
          <Typography variant="h2" gutterBottom sx={homeStyles.headerPaper.title}>
            We Provide Delivery Within 30 Min
          </Typography>
          <Typography variant="h5" sx={homeStyles.headerPaper.subtitle}>
            Imagine you don't need a diet because we provide healthy and delicious food for you!
          </Typography>
        </Box>
        <Box sx={homeStyles.headerPaper.imageBox}>
          <Image src={ScooterImage} sx={homeStyles.headerPaper.image}/>
        </Box>
      </Paper>
    </React.Fragment>
  )
}
