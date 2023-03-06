import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import allActions from "@/store/actions"
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import Offset from './components/Offset';
import navStyles from './BottomNav.styles';
import { MENU, CONTACTS, HOME } from '@/router/routesConstants'


export default function BottomNav() {
  const navValue = useSelector(state => state.nav.value)
  const dispatch = useDispatch()

  const navItems = [
    { text: 'Menu', icon: <GroupsIcon />, href: MENU },
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
          value={navValue}
          onChange={ (event, newValue) => dispatch(allActions.changeNavValue(newValue)) }
        >
          {navItems.map((item, ind) =>
            <BottomNavigationAction href={item.href} value={item.href} key={ind} label={item.text} icon={item.icon} />
          )}
        </BottomNavigation>
      </Paper>
    </React.Fragment>
  )
}
