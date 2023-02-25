import React from 'react'
import { Button, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';

const loginButtonStyles = {
  button: {
    gap: 1
  },
  typography: {
    display: { xs: 'none', lg: 'block'}
  }
}

export default function LoginButton() {
  return (
    <Button color="inherit" sx={loginButtonStyles.button}>
      <LoginIcon />
      <Typography variant="button" sx={loginButtonStyles.typography}>
        Login
      </Typography>
    </Button>
  )
}
