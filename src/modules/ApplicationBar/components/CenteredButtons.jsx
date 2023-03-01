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
      {[
        { label: 'Home', href: '/home' },
        { label: 'About Us', href: '/about-us' },
        { label: 'Contacts', href: '/contacts' }
      ].map((element, ind) =>
        <Button href={element.href} color="inherit" key={ind}>
          {element.label}
        </Button>
      )}
    </Box>
  )
}
