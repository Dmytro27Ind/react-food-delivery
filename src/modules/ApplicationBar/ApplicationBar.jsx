import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import CenteredButtons from './components/CenteredButtons';
import Header from './components/Header';
import LoginButton from './components/LoginButton';
import ThemeSwitch from '@/shared/components/ThemeSwitch';
import AppDrawer from './components/AppDrawer';
import appBarStyles from './ApplicationBar.styles'
import Offset from './components/Offset';


export default function ApplicationBar() {
  return (
    <React.Fragment>
      <AppBar position="fixed" color='primary'>
        <Toolbar sx={appBarStyles.toolbar}>
          <AppDrawer />
          <Header />
          <CenteredButtons />
          <ThemeSwitch withoutTitle color='white' sx={appBarStyles.themeSwitch}/>
          <LoginButton />
        </Toolbar>
      </AppBar>
      <Offset />
    </React.Fragment>
  )
}