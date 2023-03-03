import React from 'react'
import { Paper, Typography, Box, Button } from '@mui/material';
import ScooterImage from '@/assets/scooter.png'
import Image from '@/shared/UI/Image';
import headerPaper from './HeaderPaper.styles';
import AppRating from './components/AppRating';
import Socials from '@/shared/components/Socials/Socials';

export default function HeaderPaper() {
  return (
    <Paper elevation={3} sx={headerPaper.paper}>
      <Box sx={headerPaper.contentBox}>
        <Typography variant="h2" gutterBottom sx={headerPaper.title}>
          We Provide Delivery Within 30 Min
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={headerPaper.subtitle}>
          Imagine you don't need a diet because we provide healthy and delicious food for you!
        </Typography>
        <Box sx={headerPaper.controlsBox}>
          <AppRating />
          <Button variant="contained" sx={headerPaper.orderButton}>Order</Button>
        </Box>
        <Socials sx={headerPaper.social} color="inherit"/>
      </Box>
      <Box sx={headerPaper.imageBox}>
        <Image src={ScooterImage} sx={headerPaper.image}/>
      </Box>
    </Paper>
  )
}
