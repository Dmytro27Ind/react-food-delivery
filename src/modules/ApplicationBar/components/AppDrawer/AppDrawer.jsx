import React, { useState } from 'react'
import { IconButton, Box, SwipeableDrawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ContactsRoundedIcon from '@mui/icons-material/ContactsRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import ThemeSwitch from '@/shared/components/ThemeSwitch';
import drawerStyles from './AppDrawer.styles'
import Socials from '@/shared/components/Socials/Socials';


export default function AppDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  const listItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'About Us', icon: <GroupsIcon /> },
    { text: 'Contacts', icon: <ContactsRoundedIcon /> }
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
            <ListItemButton>
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
          <ThemeSwitch sx={drawerStyles.themeSwitch}/>
        </ListItem>
        <ListItem disablePadding>
          <Socials sx={drawerStyles.socials}/>
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