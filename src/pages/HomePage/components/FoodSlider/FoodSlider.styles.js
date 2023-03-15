const styles = {
    sliderBox: {mt: 3, mb: 3},
    imageBox: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: {xs: 150, md: 170, xl: 250},
        p: {xl: 3},
        justifyContent: 'center',
        '&:hover': {
            transform: 'scale(1.1)',
            filter: 'brightness(1.15)'
        },
        transition: '300ms'
    },
    image: {height: '80%'},
    title: {textAlign: 'center'}
}

export default styles;