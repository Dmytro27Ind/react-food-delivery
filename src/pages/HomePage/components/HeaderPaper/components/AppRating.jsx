import React, { useState } from 'react'
import { Typography, Box, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function AppRating() {
  const [value, setValue] = useState(4.5);
  const onRatingChange = (event, newValue) => setValue(newValue)

  return (
    <Box>
      <Typography variant="h6" color="text.secondary">
        Our Rating:
      </Typography>
      <Rating
        name="rating-controlled"
        value={value}
        precision={0.5}
        onChange={onRatingChange}
        icon={<StarIcon color='primary' />}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  )
}
