import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles';
import { Typography, Box, Card, CardMedia, CardContent, Chip, Rating } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StarIcon from '@mui/icons-material/Star';
import Image from '@/shared/UI/Image';
import styles from './FoodCard.styles'

export default function FoodCard({item}) {
  const theme = useTheme()
  const [value, setValue] = useState(4);
  const onRatingChange = (event, newValue) => setValue(newValue)

  const handleBuy = () => {
    // TODO
  }

  return (
    <Card sx={styles.card} elevation={4}>
      <CardMedia sx={styles.imageBox} title={item.Name}>
        <Image src={item.Image} sx={styles.image}/>
      </CardMedia>
      <CardContent sx={styles.content}>
        <Typography noWrap sx={styles.title} variant='h6' component="div" >
          {item.Name}
        </Typography>
        <Box sx={styles.subBox}>
          <Rating
            sx={styles.rating}
            size='small'
            name="rating-controlled"
            value={value}
            precision={0.5}
            onChange={onRatingChange}
            icon={<StarIcon color='primary' fontSize="inherit"/>}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          <Chip
            sx={styles.chip}
            variant={theme.palette.mode === 'dark'? "outlined" : "contained"}
            label={item.price}
            onClick={handleBuy}
            color="primary"
            icon={<ShoppingCartOutlinedIcon />}
          />
        </Box>
      </CardContent>
    </Card>
  )
}
