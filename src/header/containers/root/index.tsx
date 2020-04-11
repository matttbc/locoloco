import React from 'react';
import { useObserver } from 'mobx-react';

import { useStore } from '@store';
import { login, logout } from '@services/session';
import Header from '../../components/root';

const HeaderContainer: React.FC<{}> = () => {
  const { session } = useStore();

  const logoutHandler = () => {
    logout().then(() => {
      session.clear();
    });
  };

  return (
    useObserver(() => (
      <Header
        login={login}
        logout={logoutHandler}
        isUserAuthenticated={!!session.token}
        username={session.username}
      />
    ))
  );
};

export default HeaderContainer;
