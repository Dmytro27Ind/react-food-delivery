import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { blue, common, deepOrange, red, grey } from '@mui/material/colors';

const light = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "light",
            white: {
                main: "#ffffff"
            },
            primary: {
                light: deepOrange[200],
                main: deepOrange[200],
                dark: deepOrange[300],
                contrastText: '#000',
            },
            secondary: {
                light: grey[700],
                main: grey[800],
                dark: grey[900],
                contrastText: '#fff',
            },
            activeTab: common.black
        },
        typography: {
            fontFamily: 'Shantell Sans, sans-serif',
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        backgroundColor: '#fffaf9'
                    }
                }
            },
            MuiBottomNavigationAction: {
                styleOverrides: {
                    root: {
                        "&.MuiButtonBase-root.Mui-selected": {
                            color:  red[700]
                        }
                    }
                }
            }
        }
    })
);

const dark = responsiveFontSizes(
    createTheme({
        palette: {
            mode: "dark",
            white: {
                main: "#ffffff"
            },
            primary: {
                light: deepOrange[100],
                main: deepOrange[100],
                dark: deepOrange[200],
                contrastText: '#000',
            },
            secondary: {
                light: blue[100],
                main: blue[200],
                dark: blue[300],
                contrastText: '#000',
            },
            activeTab: deepOrange[100]
        },
        typography: {
            fontFamily: 'Shantell Sans, sans-serif',
        },
    })
);

export { light, dark }