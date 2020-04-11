/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Redirect } from 'react-router';
import { useObserver } from 'mobx-react';

import { useSession } from '@hooks/session';
import { LANDING_PATH } from '@routes';
import Loader from '@components/loader';
import { useStore } from '@store';

export default function withAuthentication<P extends object>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P> {
  const Component = (props: P) => {
    const { session } = useStore();
    const { loading } = useSession(session);

    return useObserver(() => {
      if (loading) {
        return <Loader message="Retrieving session data..." />;
      }

      return !session.token
        ? <Redirect to={LANDING_PATH} />
        : <WrappedComponent {...props} />;
    });
  };

  return Component;
}
