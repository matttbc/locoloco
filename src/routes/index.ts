import React from 'react';

import withSuspense from '@hoc/with-suspense';

const Landing = React.lazy(() => import('@pages/landing/components/root'));
const BusinessRegistration = React.lazy(() => import('@pages/business-registration/components/root'));

export const LANDING_PATH = '/';
export const REGISTER_BUSINESS_PATH = '/register';

export default [
  {
    path: LANDING_PATH,
    exact: true,
    component: withSuspense(Landing),
  },
  {
    path: REGISTER_BUSINESS_PATH,
    component: withSuspense(BusinessRegistration),
  },
  {
    path: '*',
    component: withSuspense(Landing),
  },
];
