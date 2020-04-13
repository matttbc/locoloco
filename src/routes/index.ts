import React from 'react';

import withSuspense from '@hoc/with-suspense';
import withAuthentication from '@hoc/with-authentication';

const Landing = React.lazy(() => import('@pages/landing/components/root'));
const AuthenticationCallback = React.lazy(() => import('@pages/authentication-callback/containers/root'));
const BusinessRegistration = React.lazy(() => import('@pages/business-registration/components/root'));

export const AUTHENTICATION_CALLBACK_PATH = '/authentication/callback';
export const AUTHENTICATION_RENEW_PATH = '/authentication/silent-renew';
export const LANDING_PATH = '/';
export const REGISTER_BUSINESS_PATH = '/register';

export default [
  {
    path: LANDING_PATH,
    exact: true,
    component: withSuspense(Landing),
  },
  {
    path: AUTHENTICATION_CALLBACK_PATH,
    exact: true,
    component: withSuspense(AuthenticationCallback),
  },
  {
    path: REGISTER_BUSINESS_PATH,
    component: withAuthentication(withSuspense(BusinessRegistration)),
  },
  {
    path: '*',
    component: withSuspense(Landing),
  },
];
