import React from 'react'
import { Button, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import loginButtonStyles from './LoginButton.styles'


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
