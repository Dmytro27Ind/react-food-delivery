import React from 'react'
import { Typography, Box } from '@mui/material'

const styles = {
  box: {
    m: {xs: 1, sm: 4, md: 6, lg: 8},
    mt:{xs: 3},
    textAlign: 'center'
  },
  title: { fontWeight: 'bold' }
}

export default function SubtitleSection() {
  return (
    <Box sx={styles.box}>
        <Typography variant='h3' gutterBottom sx={styles.title}>
            More Thant 100 Dishes To Order!
        </Typography>
        <Typography variant='h6' color="text.secondary" gutterBottom>
            Your favorite food and groceries, minutes from your door
        </Typography>
    </Box>
  )
}
