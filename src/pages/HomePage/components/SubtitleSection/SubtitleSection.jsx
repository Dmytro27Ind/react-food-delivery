import React from 'react'
import { Typography, Box } from '@mui/material'

export default function SubtitleSection() {
  return (
    <Box sx={{ m: 8, textAlign: 'center' }}>
        <Typography variant='h3' gutterBottom sx={{fontWeight: 'bold'}}>
            More Thant 100 Dishes To Order!
        </Typography>
        <Typography variant='h6' color="text.secondary" gutterBottom>
            Your favorite food and groceries, minutes from your door
        </Typography>
    </Box>
  )
}
