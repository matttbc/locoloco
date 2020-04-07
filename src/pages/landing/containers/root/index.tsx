import React from 'react';
import { useObserver } from 'mobx-react';

import { useStore } from '@store';
import { ping } from '@services/ping';
import LandingPage from '../../components/root';

const Landing: React.FC<{}> = () => {
  const store = useStore();

  React.useEffect(() => {
    ping()
      .then((response) => {
        store.ping.message = response.data.message;
      })
      .catch((error) => {
        store.ping.message = error.message;
      });
  }, []);

  return useObserver(() => (
    <LandingPage message={store.ping.message} />
  ));
};

export default Landing;
