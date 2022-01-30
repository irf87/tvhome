import { createTheme } from '@mui/material/styles';

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#2c2c2c',
      dark: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F04E4A',
      light: '#ff8176',
      dark: '#DF130E',
      contrastText: '#000000',
    },
    info: {
      main: '#44AEC9',
      light: '#7ce0fc',
      dark: '#007e98',
      contrastText: '#000000',
    },
    success: {
      main: '#27AE60',
      light: '#DFF3E7',
      dark: '#007d34',
      contrastText: '#000000',
    },
    error: {
      main: '#DF130E',
      light: '#FADCDB',
      dark: '#C91C18',
      contrastText: '#000000',
    },
    warning: {
      main: '#F7BE2C',
      light: '#FCEBC0',
      dark: '#c08e00',
      contrastText: '#000000',
    },
    darkGrey: {
      main: '#47465F',
      2: '#F7F7F9',
      5: '#F2F2F4',
      15: '#CECDD1',
      50: '#A3A3AF',
    },
    green: {
      main: '#00ADA4'
    },
    purple: {
      main: '#A500BF'
    },
    text: {
      main: '#ffffff',
      primary: '#ffffff',
      secondary: '#47465F',
      disabled: '#CECDD1',
    },
    divider: '#F2F2F4',
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      disabled: '#A3A3AF',
      disabledBackground: '#F2F2F4',
    },
  },

  shape: {
    borderRadiusSm: 1,
    borderRadius: 4,
    borderRadiusLg: 8,
    borderRadiusXl: 16,
  },

  borders: {
    none: 'none',
    base: '1px solid #000000',
    default: '1px solid #F2F2F4',
    disabled: '1px solid #CECDD1',
    error: '1px solid #F04E4A',
  },

/*  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 900,
      lg: 1358,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1440,
    },
  },*/

});


// theme = responsiveFontSizes(theme);

export default theme;
