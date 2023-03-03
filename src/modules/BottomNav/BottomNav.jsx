import React from 'react'
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import Offset from './components/Offset';
import navStyles from './BottomNav.styles';
import { ABOUT_US, CONTACTS, HOME } from '@/router'


export default function BottomNav() {
  let navValue = parseInt(localStorage.getItem('navValue'))

  const navItems = [
    { text: 'About Us', icon: <GroupsIcon />, href: ABOUT_US },
    { text: 'Home', icon: <HomeIcon />, href: HOME },
    { text: 'Contacts', icon: <ContactsRoundedIcon />, href: CONTACTS }
  ]

  return (
    <React.Fragment>
      <Offset />
      <Paper sx={navStyles.paper} elevation={4}>
        <BottomNavigation
          sx={navStyles.bottomNav}
          showLabels
          value={isNaN(navValue)? 1 : navValue}
          onChange={ (event, newValue) => localStorage.setItem('navValue', newValue) }
        >
          {navItems.map((item, ind) =>
            <BottomNavigationAction href={item.href} key={ind} label={item.text} icon={item.icon} />
          )}
        </BottomNavigation>
      </Paper>
    </React.Fragment>
  )
}
