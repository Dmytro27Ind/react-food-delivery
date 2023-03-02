import React from 'react'
import { Typography, Box } from '@mui/material'
import BurgerIcon from '../BurgerIcon/BurgerIcon'
import headerStyles from './Header.styles'


export default function Header() {
  return (
    <Box sx={headerStyles.box}>
      <BurgerIcon sx={headerStyles.burger} />
      <Typography variant="h6">
        React Food
      </Typography>
    </Box>
  )
}
