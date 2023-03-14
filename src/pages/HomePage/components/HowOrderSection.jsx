import { Paper, Typography, Box, Button } from '@mui/material'
import React from 'react'
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

const styles = {
  wrapper: {
    width: {xs: '100%', md: '125%'},
    alignSelf: 'center',
    p: 2,
    mt: {xs: 5, sm: 10},
    mb: {xs: 5, sm: 10}
  },
  title: {textAlign: 'center', pt: 4, pb: 4},
  itemsContainer: {
    display: 'flex',
    flexDirection: {xs: 'column', md: 'row'},
    alignItems: 'flex-start',
    gap: 6,
    p: {xs: 0, sm: 3, md: 5}
  },
  itemPaper: { width: '100%' },
  itemBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    m: {xs: 2, sm: 3, md: 4},
    gap: {md: 2}
  },
  itemTitle: {textAlign: 'center', mb: 2},
  itemSubtitle: {textAlign: 'center'},
  icon: {
    height: 80,
    width: 80,
    m: 2
  },
  buttonBox: {display: 'flex', justifyContent: 'center'},
  button: {mb: 4, mt: 4, p: 2}
}


export default function HowOrderSection() {
  const items = [
    {
      title: '1. Tell us where',
      subtitle: 'We need your address where you want your food to be delivered.',
      icon: <MapOutlinedIcon sx={styles.icon}/>
    },
    {
      title: '2. Choose and order',
      subtitle: 'Pick whatever you desire or buy whatever you\'re missing.',
      icon: <FastfoodOutlinedIcon sx={styles.icon}/>
    },
    {
      title: '3. We\'re on our way',
      subtitle: 'It only takes a few clicks for our courier to be on his way to you.',
      icon: <AirportShuttleOutlinedIcon sx={styles.icon}/>
    },
  ]
  return (
    <Box sx={styles.wrapper}>
      <Typography variant='h4' sx={styles.title}>How to order easily in 3 steps?</Typography>
      <Box sx={styles.itemsContainer}>
        {items.map((item, ind) =>
          <Paper elevation={4} sx={styles.itemPaper}>
            <Box sx={styles.itemBox} key={ind}>
              {item.icon}
              <Typography variant='h5' gutterBottom sx={styles.itemTitle}>
                {item.title}
              </Typography>
              <Typography variant='h6' color="text.secondary" sx={styles.itemSubtitle}>
                {item.subtitle}
              </Typography>
            </Box>
          </Paper>
        )}
      </Box>
      <Box sx={styles.buttonBox}>
        <Button variant='contained' sx={styles.button}>Register Now</Button>
      </Box>
    </Box>
  )
}
