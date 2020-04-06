import React from 'react';

import Loader from '@components/loader';

export default function withSuspense<P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P> {
  const Component: React.FC<P> = (props: P) => (
    <React.Suspense fallback={<Loader />}>
      <WrappedComponent {...props as P} />
    </React.Suspense>
  );

  return Component;
}
