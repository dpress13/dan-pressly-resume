import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
        },
    palette: {
        primary: {
            main: '#005191',
            }
    }
});

export default theme;