import React from 'react';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { light, dark } from './palette/palette'
import ApplicationBar from './modules/ApplicationBar';
import BottomNav from './modules/BottomNav';
import AppRouter from './router/AppRouter';
import appStyles from './App.styles';


function App() {
  const theme = useSelector(state => state.theme.theme)

  return (
    <ThemeProvider theme={(theme === 'dark')? dark : light}>
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
