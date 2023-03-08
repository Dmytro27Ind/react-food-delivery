import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

const styles = {
  box: {
    display: 'flex',
    flexDirection: {xs: 'column', sm: 'row'},
    gap: {xs: 1, sm: 4},
    mb: 4,
    mt: 4
  },
  author: {
    flexGrow: 1,
    mt: {xs: 2, sm: 0},
    textAlign: {xs: 'start', sm: 'end'}
  }
}

export default function FooterSection() {
  return (
    <React.Fragment>
        <Divider />
        <Box sx={styles.box}>
            <Typography variant='subtitle1' color="text.secondary">Cookies</Typography>
            <Typography variant='subtitle1' color="text.secondary">Conditions of use</Typography>
            <Typography variant='subtitle1' color="text.secondary">Privacy Policy</Typography>
            <Typography variant='subtitle2' color="text.secondary" sx={styles.author}>Made by Dmytro Kagirov 2023</Typography>
        </Box>
    </React.Fragment>
  )
}
