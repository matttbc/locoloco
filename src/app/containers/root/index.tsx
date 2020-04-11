import React from 'react';

import { useSession } from '@hooks/session';
import Loader from '@components/loader';
import { useStore } from '@store';
import App from '../../components/root';

type RouteProps = {
  path: string;
  exact?: boolean;
  component: React.ComponentType<any>;
}

type Props = {
  routes: RouteProps[];
}

const AppContainer: React.FC<Props> = ({ routes }: Props) => {
  const { session } = useStore();
  const { loading } = useSession(session);

  if (loading) {
    return <Loader message="Retrieving session data..." />;
  }

  return <App routes={routes} />;
};

export default AppContainer;
