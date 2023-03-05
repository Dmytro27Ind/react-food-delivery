
const styles = {
    carouselBox: {mt: 5, mb: 5},
    bannerBox: {
        display: 'flex',
        width: '100%',
        height: {xs: 200, sm: 250, lg: 300}
    },
    elementBox: {
        width: {xs: '50%', sm: '25%'},
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        '&:hover': {transform: 'scale(1.1)'},
        transition: '300ms'
    },
    elementImage: {width: '90%'},
    elementTitle: {
        textAlign: 'center',
        width: '100%'
    }
}

export default styles;