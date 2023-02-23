import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from "./store/actions"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper } from '@mui/material';
import { light, dark } from './palette'
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';

let appStyles = {
  container: {
    width: {xs: '96%', sm: '90%', md: '80%'}
  }
}

function App() {
  const theme = useSelector(state => state.theme.theme)
  const dispatch = useDispatch()

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={createTheme((theme === 'dark')? dark : light)}>
        <Container sx={appStyles.container}>
          <Box sx={{ bgcolor: '#cf33fc', height: '40vh' }}>
            <Typography variant="h1" gutterBottom>
              Food Delivery
            </Typography>
          </Box>
          <Box>
            <Paper sx={{ height: '40vh' }}>
              <Typography variant="h3" gutterBottom>
                Hello
              </Typography>
              <Box component="span" sx={{display: 'flex', alignItems: 'center'}}>
                <Typography sx={{ml: 4}}>
                  {(theme === 'dark')? 'dark' : 'light'}
                </Typography>
                <IconButton sx={{ ml: 1 }} onClick={() => dispatch(allActions.switchTheme())} color="inherit">
                  {(theme === 'dark')? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Box>
            </Paper>
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
