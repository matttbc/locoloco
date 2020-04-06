import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import initAxios from '@config/axios';
import '@style/index.scss';
import theme from '@theme';
import routes from '@routes';
import App from '@app';

initAxios({
  baseUrl: process.env.API_URL,
});

render(
  <BrowserRouter>
    <CssBaseline>
      <MuiThemeProvider theme={theme}>
        <App routes={routes} />
      </MuiThemeProvider>
    </CssBaseline>
  </BrowserRouter>,
  document.getElementById('root'),
);
