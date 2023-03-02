
const homeStyles = {
    headerPaper: {
        paper: {
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center'
        },
        box: {
            width: { xs: '90%', md: '50%' },
            display: 'flex',
            alignItems: 'center',
            p: {xs: 2, lg: 4},
            pt: {xs: 4, md: 8},
            pb: {xs: 4, md: 8},
            flexDirection: 'column',
            justifyContent: 'center'
        },
        imageBox: {
            width: { xs: '90%', md: '50%' },
            display: 'flex',
            alignItems: 'center',
            p: {xs:4, sm: 8, md: 2, lg: 8},
        },
        title: {
            fontWeight: 'bold',
            ml: { xs: 2, md: 3, lg: 6},
            mr: { xs: 2, md: 3, lg: 5}
        },
        subtitle: {
            ml: { xs: 2, md: 3, lg: 6},
            mr: { xs: 2, md: 3, lg: 5}
        },
        image: { width: '100%' }
    }
}

export default homeStyles