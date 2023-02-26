import React from 'react'
import { Typography, Box } from '@mui/material'
import BurgerIcon from './BurgerIcon'

const headerStyles = {
  box: {
    display: 'flex',
    flexDirection: 'row',
    gap: { xs: 1, lg: 2 },
    justifyContent: { xs: 'center', md: 'flex-start' },
    position: { xs: 'absolute', md: 'relative;'},
    left: 0,
    right: 0,
    zIndex: 0
  },
  burger: {
    width: 34,
    height: 34
  }
}

export default function Header() {
  return (
    <Box sx={headerStyles.box}>
      <BurgerIcon sx={headerStyles.burger} />
      <Typography variant="h6">
        React Food Delivery
      </Typography>
    </Box>
  )
}
