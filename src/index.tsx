import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import initAxios from '@config/axios';
import theme from '@theme';
import routes from '@routes';
import { StoreProvider } from '@store';
import App from '@app';

initAxios({
  baseUrl: process.env.API_URL,
});

render(
  <StoreProvider>
    <BrowserRouter>
      <CssBaseline>
        <MuiThemeProvider theme={theme}>
          <App routes={routes} />
        </MuiThemeProvider>
      </CssBaseline>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
