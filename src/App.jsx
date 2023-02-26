import React from 'react';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { light, dark } from './palette'
import ApplicationBar from './modules/ApplicationBar';
import HomePage from './pages/HomePage';
import BottomNav from './modules/BottomNav';

let appStyles = {
  container: {
    width: {xs: '96%', sm: '90%', md: '80%'}
  }
}

function App() {
  const theme = useSelector(state => state.theme.theme)

  return (
    <ThemeProvider theme={createTheme((theme === 'dark')? dark : light)}>
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
