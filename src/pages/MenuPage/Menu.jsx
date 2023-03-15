import React from 'react'
import { Box } from '@mui/material'
import FooterSection from '@/shared/components/FooterSection'
import items from '@/shared/foodItems'
import FoodCard from './components/FoodCard'

const styles = {
  box: {
    display: 'flex',
    flexWrap: 'wrap',
    mt: 4,
    mb: 4,
    columnGap: {sm: "2%", xl: '1.5%'},
    rowGap: 4,
    justifyContent: 'center'
  }
}

export default function Menu() {
  return (
    <React.Fragment>
      <Box sx={styles.box}>
        {items.map((item, ind) =>
          <FoodCard key={ind} item={item}/>
        )}
      </Box>
      <FooterSection />
    </React.Fragment>
  )
}
