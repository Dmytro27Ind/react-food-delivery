import React, { useState } from 'react'
import { Typography, Box, Rating } from '@mui/material';

export default function AppRating() {
  const [value, setValue] = useState(3.5);
  const onRatingChange = (event, newValue) => setValue(newValue)

  return (
    <Box>
      <Typography variant="h6" color="text.secondary">
        Our Rating:
      </Typography>
      <Rating name="rating-controlled" value={value} precision={0.5} onChange={onRatingChange}/>
    </Box>
  )
}
