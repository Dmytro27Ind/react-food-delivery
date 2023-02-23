import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Paper, Switch, FormControlLabel } from '@mui/material';
import { light, dark } from './palette'

let appStyles = {
  container: {
    width: {xs: '96%', sm: '90%', md: '80%'}
  }
}

function App() {
  const [isDark, setIsDark] = useState(true)
  const themeChange = () => setIsDark(!isDark)

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={createTheme(isDark? dark : light)}>
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
              <FormControlLabel control={<Switch checked={isDark} onChange={themeChange}/>} label={isDark? "dark" : "light"} />
            </Paper>
          </Box>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
