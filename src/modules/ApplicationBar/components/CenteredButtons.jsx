import React from 'react'
import { Box, Button } from '@mui/material'

const buttonsStyles = {
  box: {
    flexGrow: 1,
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'center',
    gap: 2
  }
}

export default function CenteredButtons() {
  return (
    <Box sx={buttonsStyles.box}>
      {['Home', 'About Us', 'Contacts'].map((label, ind) =>
        <Button color="inherit" key={ind}>
          {label}
        </Button>
      )}
    </Box>
  )
}
