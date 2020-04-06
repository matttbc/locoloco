import React from 'react';

import withSuspense from '@hoc/with-suspense';

const Landing = React.lazy(() => import('@pages/landing/components/root'));

export const LANDING_PATH = '/';

export default [
  {
    path: LANDING_PATH,
    exact: true,
    component: withSuspense(Landing),
  },
  {
    path: '*',
    component: withSuspense(Landing),
  },
];
