import { Typography, Box } from '@mui/material'
import React from 'react'
import HeaderPaper from './components/HeaderPaper/HeaderPaper'


export default function HomePage() {
    return (
    <React.Fragment>
      <HeaderPaper />
      <Box sx={{ m: 8, textAlign: 'center' }}>
        <Typography variant='h3' gutterBottom sx={{fontWeight: 'bold'}}>More Thant 10,000 Dishes To Order!</Typography>
        <Typography variant='h6' color="text.secondary" gutterBottom>Your favorite food and groceries, minutes from your door</Typography>
      </Box>
    </React.Fragment>
  )
}
