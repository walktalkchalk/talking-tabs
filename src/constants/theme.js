import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  shadows: Array(25).fill('none'),
  palette: {
    primary: {
      main: '#F5BC41',//'#FFCF00',
      secondary: '#F7CE46'
    },
    secondary: {
      main: '#000000',
      secondary: '#FFFFFF'
    },
    background: '#FFFFFF',
    grays: {
      lighter: '#F7F7F7',
      light: '#DADADA',
      mediumLighter: '#CBCBCB',
      mediumLight: '#848484',
      medium: '#626262',
      dark: '#000000'
    },
    red: '#FF0000',
    white: '#FFFFFF',
    border: '#E6E6E6',
    borderLight: '#CBCBCB',
    transparent: 'transparent'
  },
  spacing: 10
});

export default theme;
