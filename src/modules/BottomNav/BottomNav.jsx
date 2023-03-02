import React, { useState } from 'react'
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import Offset from './components/Offset';
import navStyles from './BottomNav.styles';


export default function BottomNav() {
  const [value, setValue] = useState(1);

  const navItems = [
    { text: 'About Us', icon: <GroupsIcon /> },
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Contacts', icon: <ContactsRoundedIcon /> }
  ]

  return (
    <React.Fragment>
      <Offset />
      <Paper sx={navStyles.paper} elevation={4}>
        <BottomNavigation
          sx={navStyles.bottomNav}
          showLabels
          value={value}
          onChange={ (event, newValue) => setValue(newValue) }
        >
          {navItems.map((item, ind) =>
            <BottomNavigationAction key={ind} label={item.text} icon={item.icon} />
          )}
        </BottomNavigation>
      </Paper>
    </React.Fragment>
  )
}
