import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  shadows: Array(25).fill('none'),
  palette: {
    primary: {
      main: '#D40F76',
      secondary: '#D3F3FB'
    },
    secondary: {
      main: '#000000',
      secondary: '#FFFFFF'
    },
    background: '#000000',
    grays: {
      lighter: '#F7F7F7',
      mediumLighter: '#DADADA',
      mediumLight: '#848484',
      medium: '#626262',
      light: '#CBCBCB',
      dark: '#000000'
    },
    border: '#E6E6E6',
    borderLight: '#CBCBCB',
    transparent: 'transparent'
  },
  spacing: 10
});

export default theme;
