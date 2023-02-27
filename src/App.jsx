import React from 'react';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { light, dark } from './palette'
import ApplicationBar from './modules/ApplicationBar';
import HomePage from './pages/HomePage';
import BottomNav from './modules/BottomNav';

let appStyles = {
  container: {
    maxWidth: { lg: '100%' },
    width: {xs: '98%', sm: '90%', md: '80%'}
  }
}

function App() {
  const theme = useSelector(state => state.theme.theme)
  const muiTheme = responsiveFontSizes(
    createTheme((theme === 'dark')? dark : light)
  )

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <ApplicationBar />
      <Container sx={appStyles.container}>
        <HomePage />
      </Container>
      <BottomNav />
    </ThemeProvider>
  )
}

export default App
