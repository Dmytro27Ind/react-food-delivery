import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import allActions from "./store/actions"
import { Provider } from 'react-redux';
import store from './store';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import items from './foodItems'
import DefaultSettingsT from './carouselSettings';
import styles from './FoodCarousel.styles';
import Banner from './components/Banner';
import FoodTabs from './components/FoodTabs';


const FoodCarousel = () => {
    return (
        <Provider store={store}>
            <MyCarousel />
        </Provider>
    )
}

const MyCarousel = () => {
    const slicedItems = []
    const theme = useTheme();
    const downSm = useMediaQuery(theme.breakpoints.down('sm'));
    const value = useSelector(state => state.tabs.value)
    const dispatch = useDispatch()

    if (downSm){
        for(let i=0; i<items.length; i+=2){
            slicedItems.push([
                items[i], items[i+1]
            ])
        }
    } else {
        for(let i=0; i<items.length; i+=4){
            slicedItems.push([
                items[i], items[i+1], items[i+2], items[i+3]
            ])
        }
    }

    return (
        <Box sx={styles.carouselBox}>
            <FoodTabs />
            <Carousel {...DefaultSettingsT}
                index={value}
                next={ (next) => { dispatch(allActions.changeTabsValue(next)) }}
                prev={ (prev) => { dispatch(allActions.changeTabsValue(prev)) }}
            >
                {slicedItems.map((item, index) =>
                    <Banner item={item} key={index} />
                )}
            </Carousel>
        </Box>
    );
}

export default FoodCarousel;