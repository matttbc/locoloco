import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  typography: {
    fontFamily: [
      'Nunito Sans',
      'sans-serif',
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
