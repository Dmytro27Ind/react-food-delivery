import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Typography, Box} from '@mui/material';
import Image from '@/shared/UI/Image';

import BaconHamburger from "../../../assets/burger_paper.png"
import CheeseHamburger from '../../../assets/hamburger_cheese.png'
import SmallHamburger from '../../../assets/hamburger_small.png'
import VeggieHamburger from '../../../assets/hamburger_veggie.png'
import Chicken from '../../../assets/chicken.png'
import ChickenNuggets from '../../../assets/chicken_nuggets.png'
import ChickenRings from '../../../assets/chicken_rings.png'
import ChickenSmall from '../../../assets/chicken_small_nuggets.png'
import FrenchPotato from '../../../assets/french_potato.png'
import FrenchSmall from '../../../assets/french_potato_small.png'
import FrenchWavePotato from '../../../assets/french_potato_wave.png'
import FrenchWedges from '../../../assets/french_potato_wedges.png'
import FizzyMojito from '../../../assets/fizzy_mojito.png'
import Lemonade from '../../../assets/lemonade.png'
import Mojito from '../../../assets/mojito.png'
import OrangeJuice from '../../../assets/orange_juice.png'

const DefaultSettingsT = {
    autoPlay: true,
    animation: "slide",
    indicators: true,
    duration: 500,
    navButtonsAlwaysVisible: false,
    navButtonsAlwaysInvisible: false,
    cycleNavigation: true,
    fullHeightHover: true,
    swipe: true
}

const FoodCarousel = () => {
    return (
        <div style={{ marginTop: "50px", marginBottom: "50px" }}>
            <Typography variant='h4' sx={{mb: 3}}>Burgers:</Typography>
            <Carousel {...DefaultSettingsT}>
                {items.map((item, index) =>
                    <Banner item={item} key={index} />
                )}
            </Carousel>
        </div>
    );
}

const Banner = (props) => {
    return (
        <Box sx={{display: 'flex', height: 300}}>
            {props.item.map((element, ind) =>
                <Box sx={{width: '25%', display: 'flex', justifyContent: 'center', flexDirection: 'column', '&:hover': {transform: 'scale(1.15)'}, transition: '300ms'}} key={ind}>
                    <Box>
                        <Image src={element.Image} sx={{width: '90%'}}/>
                    </Box>
                    <Typography variant='h6' sx={{textAlign: 'center', width: '100%'}}>
                        {element.Name}
                    </Typography>
                </Box>
            )}
        </Box>
    )
}

const items = [
    [
        {Name: "Bacon Hamburger", Image: BaconHamburger},
        {Name: "Cheese Hamburger", Image: CheeseHamburger},
        {Name: "Small Hamburger", Image: SmallHamburger},
        {Name: "Veggie Hamburger", Image: VeggieHamburger},
    ],
    [
        {Name: "Chicken", Image: Chicken},
        {Name: "Chicken Nuggets", Image: ChickenNuggets},
        {Name: "Chicken Rings", Image: ChickenRings},
        {Name: "Chicken Small", Image: ChickenSmall},
    ],
    [
        {Name: "French Potato", Image: FrenchPotato},
        {Name: "French Small", Image: FrenchSmall},
        {Name: "French Wave Potato", Image: FrenchWavePotato},
        {Name: "French Wedges", Image: FrenchWedges},
    ],
    [
        {Name: "Fizzy Mojito", Image: FizzyMojito},
        {Name: "Lemonade", Image: Lemonade},
        {Name: "Mojito", Image: Mojito},
        {Name: "Orange Juice", Image: OrangeJuice},
    ]
]

export default FoodCarousel;