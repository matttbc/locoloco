import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    htmlFontSize: 10,
  },
  palette: {
    background: {
      default: '#ffffff',
    },
    primary: {
      main: '#6CBF84',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#F26968',
    },
    error: {
      main: '#FF0000',
    },
  },
});
