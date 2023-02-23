import React from 'react'
import { Paper, Typography, Box } from '@mui/material';

export default function HomePage() {
  return (
    <React.Fragment>
      <Box sx={{ bgcolor: '#cf33fc', height: '40vh' }}>
        <Typography variant="h1" gutterBottom>
          Food Delivery
        </Typography>
      </Box>
      <Box>
        <Paper sx={{ height: '40vh' }}>
          <Typography variant="h3" gutterBottom>
            Hello
          </Typography>
        </Paper>
      </Box>
      <Box sx={{ bgcolor: '#cf399c', height: '40vh' }}>
        <Typography variant="h1" gutterBottom>
          Food Delivery
        </Typography>
      </Box>
      <Box sx={{ bgcolor: '#cf99fc', height: '40vh' }}>
        <Typography variant="h1" gutterBottom>
          Food Delivery
        </Typography>
      </Box>
    </React.Fragment>
  )
}
