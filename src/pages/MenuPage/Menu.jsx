import React from 'react'
import { Typography, Box, Card, CardMedia, CardContent } from '@mui/material'
import FooterSection from '@/shared/components/FooterSection'
import items from '@/shared/foodItems'
import Image from '@/shared/UI/Image';

const styles = {
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    mt: 4,
    mb: 4,
    columnGap: {sm: "2%", xl: '1.5%'},
    rowGap: 2,
    justifyContent: 'center'
  },
  card: {
    width: {xs: '90%', sm: '49%', md: '32%', lg: '23.5%', xl: '18.8%'},
    display: 'flex',
    flexDirection: 'column'
  },
  cardImageBox: {
    p: { xs: 5, sm: 2},
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardImage: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: 180
  },
}

export default function Menu() {
  return (
    <React.Fragment>
      <Box sx={styles.box}>
        {items.map((item, ind) =>
          <Card sx={styles.card}>
            <CardMedia sx={styles.cardImageBox} title={item.Name}>
              <Image src={item.Image} sx={styles.cardImage}/>
            </CardMedia>
            <CardContent>
              <Typography variant='h5' component="div" >
                {item.Name}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Box>
      <FooterSection />
    </React.Fragment>
  )
}
