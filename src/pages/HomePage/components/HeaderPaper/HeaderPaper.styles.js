
const headerPaper = {
    paper: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        mt: 3,
        flexWrap: 'wrap',
        pt: {xs: 2, sm: 4, md: 6},
    },
    contentBox: {
        width: { xs: '90%', md: '55%' },
        display: 'flex',
        alignItems: 'center',
        pl: {sm: 2, md: 5, lg: 8},
        pr: {sm: 2, md: 5, lg: 8},
        flexDirection: 'column',
        justifyContent: 'center',
        gap: 1,
    },
    title: { fontWeight: 'bold' },
    imageBox: {
        width: { xs: '90%', md: '45%' },
        display: 'flex',
        justifyContent: 'center',
        p: {xs: 0, sm: 1, md: 2},
        mt: {xs: 3, sm: 0},
        position: 'relative',
    },
    image: {
        width: '100%',
        maxWidth: 540
    },
    discountImage: {
        position: 'absolute',
        width: '40%',
        maxWidth: { sm: 160, md: 180 },
        top: {xs: -10, sm: 30, md: -20},
        left: 0
    },
    controlsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 3,
        mb: 4,
        gap: {xs: 2, sm: 3, lg: 4}
    },
    controlsBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: {xs: 3, sm: 12, md: 8,  lg: 12},
    },
    orderButton: {
        pl: 3,
        pr: 3
    },
    social: {
        display: 'flex',
        flexWrap: 'nowrap'
    }
}

export default headerPaper