import React from 'react';

import { useSession } from '@hoc/with-authentication';
import Loader from '@components/loader';
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
  const { loading } = useSession();

  if (loading) {
    return <Loader message="Retrieving session data..." />;
  }

  return <App routes={routes} />;
};

export default AppContainer;
