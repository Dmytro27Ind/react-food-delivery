import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import allActions from "../../../store/actions"
import { Box, Typography, IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const themeSwitchStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: 1
}

export default function ThemeSwitch() {
  const theme = useSelector(state => state.theme.theme)
  const dispatch = useDispatch()

  return (
    <Box component="span" sx={themeSwitchStyle}>
      <Typography>
        {(theme === 'dark')? 'dark' : 'light'}
      </Typography>
      <IconButton onClick={() => dispatch(allActions.switchTheme())} color="inherit">
        {(theme === 'dark')? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  )
}
