import React from 'react'
import { Paper, Typography, Box } from '@mui/material';
import ScooterImage from '@/assets/scooter.png'
import Image from '@/UI/Image';
import homeStyles from './HomePage.styles';


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
