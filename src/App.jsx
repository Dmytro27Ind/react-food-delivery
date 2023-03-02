import React from 'react';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import { light, dark } from './palette'
import ApplicationBar from './modules/ApplicationBar';
import BottomNav from './modules/BottomNav';
import { AppRouter } from './router';
import appStyles from './App.styles';


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
        <AppRouter />
      </Container>
      <BottomNav />
    </ThemeProvider>
  )
}

export default App
