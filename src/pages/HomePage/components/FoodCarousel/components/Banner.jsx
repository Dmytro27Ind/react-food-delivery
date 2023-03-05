import React from 'react'
import { Typography, Box } from '@mui/material';
import Image from '@/shared/UI/Image';
import styles from '../FoodCarousel.styles';

export default function Banner(props) {
    return (
        <Box sx={styles.bannerBox}>
            {props.item.map((element, ind) =>
                <Box sx={styles.elementBox} key={ind}>
                    <Box>
                        <Image src={element.Image} sx={styles.elementImage}/>
                    </Box>
                    <Typography variant='h6' sx={styles.elementTitle}>
                        {element.Name}
                    </Typography>
                </Box>
            )}
        </Box>
    )
}
