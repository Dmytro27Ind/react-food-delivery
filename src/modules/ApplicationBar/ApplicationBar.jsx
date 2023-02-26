import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { styled } from '@mui/material/styles';
import CenteredTabs from './components/CenteredTabs';
import Header from './components/Header';
import LoginButton from './components/LoginButton';
import ThemeSwitch from './components/ThemeSwitch';
import AppDrawer from './components/AppDrawer';

const appBarStyles = {
  toolbar: {
    width: {xs: '96%', sm: '90%', md: '80%'},
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function ApplicationBar() {
  return (
    <React.Fragment>
      <AppBar position="fixed" color='primary'>
        <Toolbar sx={appBarStyles.toolbar}>
          <AppDrawer />
          <Header />
          <CenteredTabs />
          <ThemeSwitch />
          <LoginButton />
        </Toolbar>
      </AppBar>
      <Offset />
    </React.Fragment>
  )
}