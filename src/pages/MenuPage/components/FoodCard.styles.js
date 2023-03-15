
const styles = {
    card: {
      width: {xs: '90%', sm: '49%', md: '32%', lg: '23.5%', xl: '18.8%'},
      display: 'flex',
      flexDirection: 'column',
      borderRadius: 4
    },
    imageBox: {
      p: { xs: 5, sm: 2},
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    image: {
      width: 'auto',
      height: 'auto',
      maxWidth: '100%',
      maxHeight: 180
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    },
    title: {flexGrow: 1},
    rating: {flexGrow: 1},
    subBox: {
      display: 'flex',
      alignItems: 'center'
    },
    chip: {
      fontWeight: 'bold',
      pt: 2,
      pb: 2,
      pl: 1
    }
}

export default styles;