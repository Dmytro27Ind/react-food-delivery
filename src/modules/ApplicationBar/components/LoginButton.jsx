import React from 'react'
import { Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';

const loginButtonStyles = {
  gap: 1
}

export default function LoginButton() {
  return (
    <Button color="inherit" sx={loginButtonStyles}>
      <LoginIcon />
      Login
    </Button>
  )
}
