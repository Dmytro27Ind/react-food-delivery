import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import allActions from "@/store/actions"
import { IconButton, Box, SwipeableDrawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ThemeSwitch from '@/shared/components/ThemeSwitch';
import drawerStyles from './AppDrawer.styles'
import Socials from '@/shared/components/Socials';
import { MENU, CONTACTS, HOME } from '@/router/routesConstants'


export default function AppDrawer() {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const listItems = [
    { text: 'Home', icon: <HomeIcon />, href: HOME },
    { text: 'Menu', icon: <GroupsIcon />, href: MENU },
    { text: 'Contacts', icon: <ContactsRoundedIcon />, href: CONTACTS }
  ]

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  const list = () => (
    <Box sx={drawerStyles.listBox} role="presentation" onKeyDown={toggleDrawer(false)}>
      <List>
        {listItems.map((item, index) => (
          <ListItem key={index} onClick={toggleDrawer(false)} disablePadding>
            <ListItemButton href={item.href} onClick={() => dispatch(allActions.changeNavValue(item.href))}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ThemeSwitch color="secondary" sx={drawerStyles.themeSwitch}/>
        </ListItem>
        <ListItem disablePadding>
          <Socials sx={drawerStyles.socials} color="text.secondary"/>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={drawerStyles.box}>
      <IconButton onClick={toggleDrawer(true)} color='inherit' sx={drawerStyles.drawer}>
        <MenuRoundedIcon />
      </IconButton>
      <SwipeableDrawer anchor='left' open={isOpen} onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}>
        {list()}
      </SwipeableDrawer>
    </Box>
  )
}