/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import initAxios from '@config/axios';
import initAuthManager from '@services/session';
import theme from '@theme';
import routes, { AUTHENTICATION_CALLBACK_PATH, AUTHENTICATION_RENEW_PATH } from '@routes';
import { StoreProvider } from '@store';
import App from '@app/containers/root';

initAxios({
  baseUrl: process.env.PRIVATE_API_URL,
});

initAuthManager({
  authority: process.env.STS_AUTHORITY,
  client_id: process.env.AUTHENTICATION_CLIENT_ID,
  redirect_uri: `${process.env.APP_ROOT}${AUTHENTICATION_CALLBACK_PATH}`,
  silent_redirect_uri: `${process.env.APP_ROOT}${AUTHENTICATION_RENEW_PATH}`,
  post_logout_redirect_uri: process.env.APP_ROOT,
  response_type: 'code',
  scope: process.env.AUTHENTICATION_CLIENT_SCOPE,
});

render(
  <StoreProvider>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App routes={routes} />
      </MuiThemeProvider>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root'),
);
