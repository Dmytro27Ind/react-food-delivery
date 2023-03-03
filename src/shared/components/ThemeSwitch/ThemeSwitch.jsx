import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import allActions from "@/shared/store/actions"
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import buttonStyles from './ThemeSwitch.styles'

export default function ThemeSwitch({sx, withoutTitle, color='primary'}) {
  const theme = useSelector(state => state.theme.theme)
  const dispatch = useDispatch()

  const handleChange = (event, newTheme) => {
    if (newTheme && newTheme !== theme)
      dispatch(allActions.switchTheme())
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={theme}
      exclusive
      onChange={handleChange}
      aria-label="Theme"
      sx={sx}
    >
      <ToggleButton color={color} value="light" sx={buttonStyles}>
        <LightModeIcon />
        {withoutTitle? undefined : 'Light'}
      </ToggleButton>
      <ToggleButton color={color} value="dark" sx={buttonStyles}>
        <DarkModeIcon />
        {withoutTitle? undefined : 'Dark'}
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
