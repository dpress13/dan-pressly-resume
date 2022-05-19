import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    // components: {
    //     MuiContainer: {
    //         styleOverrides: {
    //             root: {
    //                 '@media (min-width: 600px)': {
    //                     paddingLeft: '0',
    //                     paddingRight: '0'
    //                 },
    //             },
    //         },
    //     },
    // },
    // spacing: 8,
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
        },
    palette: {
        primary: {
            main: '#000000',
            }
    }
});

export default theme;