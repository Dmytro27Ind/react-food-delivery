import React, { useState, useEffect, useRef } from 'react'
import store from './store';
import { useSelector, useDispatch } from 'react-redux';
import allActions from "./store/actions"
import { Provider } from 'react-redux';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import items from './foodItems'
import Image from '@/shared/UI/Image';
import { Typography, Box } from '@mui/material';
import styles from './FoodSlider.styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import FoodTabs from './FoodTabs';


export default function FoodSlider() {
  return (
    <Provider store={store}>
      <MyFoodSlider />
    </Provider>
  )
}

function MyFoodSlider() {
  const theme = useTheme();
  const downSm = useMediaQuery(theme.breakpoints.down('sm'));
  const downLg = useMediaQuery(theme.breakpoints.down('lg'));
  const value = useSelector(state => state.tabs.value)
  const dispatch = useDispatch()
  const slider = useRef()

  let [slides, setSlides] = useState(0)

  useEffect(() => {
    if(downSm)
      setSlides(1)
    else if (downLg)
      setSlides(3)
    else
      setSlides(4)
  }, [downSm, downLg])

  useEffect(() => {
    slider.current.slickGoTo(value*4)
  }, [value])

  const settings = {
    infinite: true,
    slidesToShow: slides,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    swipeToSlide: true,
    arrows: false,
    afterChange: current => dispatch(allActions.changeTabsValue(Math.floor(current/4)))
  };

  return (
    <React.Fragment>
      <FoodTabs />
      <Box sx={styles.sliderBox}>
        <Slider {...settings} ref={slider}>
          {items.map((element, ind) =>
            <div key={ind}>
              <Box sx={styles.imageBox}>
                <Image src={element.Image} sx={styles.image}/>
              </Box>
              <Typography variant='h6' sx={styles.title}>
                {element.Name}
              </Typography>
            </div>
          )}
        </Slider>
      </Box>
    </React.Fragment>
  )
}
