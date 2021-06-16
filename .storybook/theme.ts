import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    palette: {
        primary: { main: '#00155F', contrastText: '#FFFFFF' },
        secondary: { main: '#008AD8', contrastText: '#FFFFFF' },
        warning: { main: '#B00020' },
        error: { main: '#B00020' },
        background: { default: '#EBECF2' },
        info: {main:'#FFFFFF'},     // surfaceの代用
    },
    typography: {
        h1: {
            color: '#00155F',
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: 'DIN Alternate',
        },
        h2: {
            color: '#00155F',
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'Roboto',
        },
    },
});
