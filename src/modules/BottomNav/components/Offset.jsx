import { styled } from '@mui/material/styles'

const Offset = styled('div')(({theme}) => ({
    width: '100%',
    height: 56,
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}))

export default Offset