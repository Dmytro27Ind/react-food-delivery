import React from 'react'
import { useDispatch } from 'react-redux';
import allActions from "@/store/actions"
import { Box, Button } from '@mui/material'
import { MENU, CONTACTS, HOME } from '@/router/routesConstants'
import buttonsStyles from './CenteredButtons.styles'


export default function CenteredButtons() {
  const dispatch = useDispatch()

  return (
    <Box sx={buttonsStyles.box}>
      {[
        { label: 'Home', href: HOME },
        { label: 'Menu', href: MENU },
        { label: 'Contacts', href: CONTACTS }
      ].map((element, ind) =>
        <Button href={element.href}
          color="inherit" key={ind}
          onClick={() => dispatch(allActions.changeNavValue(element.href))}
        >
          {element.label}
        </Button>
      )}
    </Box>
  )
}
