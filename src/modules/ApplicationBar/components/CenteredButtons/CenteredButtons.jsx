import React from 'react'
import { Box, Button } from '@mui/material'
import { ABOUT_US, CONTACTS, HOME } from '../../../../router'
import buttonsStyles from './CenteredButtons.styles'


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
