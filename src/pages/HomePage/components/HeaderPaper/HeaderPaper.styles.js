
const headerPaper = {
    paper: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center'
    },
    contentBox: {
        width: { xs: '90%', md: '55%' },
        display: 'flex',
        alignItems: 'center',
        // p: {xs: 2, md: 5, lg: 8},
        pl: {xs: 2, md: 5, lg: 8},
        pr: {xs: 2, md: 5, lg: 8},
        pt: {xs: 4, md: 8},
        pb: {xs: 4, md: 8},
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 1
    },
    imageBox: {
        width: { xs: '90%', md: '45%' },
        display: 'flex',
        alignItems: 'center',
        p: {xs:4, sm: 8, md: 2, lg: 6},
    },
    title: { fontWeight: 'bold' },
    image: {
        width: '100%',
        maxWidth: 540
    },
    orderButton: {
        alignSelf: 'end',
        mt: 4,
        mb: 4,
        pl: 3,
        pr: 3
    },
    controlsBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: {xs: 3, sm: 12, md: 8,  lg: 12},
        mt: 3
    },
    social: {
        display: 'flex',
        flexWrap: 'nowrap'
    }
}

export default headerPaper