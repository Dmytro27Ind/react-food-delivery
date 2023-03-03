import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const light = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "light",
            white: {
                main: "#ffffff"
            }
        },
        typography: {
            fontFamily: 'Shantell Sans, Roboto, sans-serif',
        },
    })
);

const dark = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "dark",
            white: {
                main: "#ffffff"
            }
        },
        typography: {
            fontFamily: 'Shantell Sans, Roboto, sans-serif',
        },
    })
);

export { light, dark }