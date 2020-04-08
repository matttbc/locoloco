import React from 'react';
import { useObserver } from 'mobx-react';

import { useStore } from '@store';
import { fetch } from '@services/ping';
import LandingPage from '../../components/root';

const Landing: React.FC<{}> = () => {
  const { ping } = useStore();

  React.useEffect(() => {
    fetch()
      .then((response) => {
        ping.message = response.data.message;
      })
      .catch((error) => {
        ping.message = error.message;
      });
  }, []);

  return useObserver(() => (
    <LandingPage message={ping.message} />
  ));
};

export default Landing;
