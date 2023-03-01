import React from 'react'
import { Box, Button } from '@mui/material'
import { ABOUT_US, CONTACTS, HOME } from '../../../router'

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
        { label: 'Home', href: HOME },
        { label: 'About Us', href: ABOUT_US },
        { label: 'Contacts', href: CONTACTS }
      ].map((element, ind) =>
        <Button href={element.href} color="inherit" key={ind}>
          {element.label}
        </Button>
      )}
    </Box>
  )
}
