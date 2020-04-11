import React from 'react';

import { getUser, loginRedirect } from '@services/session';

export const useSessionStatus = (session) => {
  const [loading, setLoading] = React.useState<boolean>(!session.token);

  React.useEffect(() => {
    if (!session.token) {
      getUser()
        .then((user) => {
          if (user) {
            session.set(user);
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  return {
    loading,
  };
};

export const useLoginStatus = (session) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>('');

  React.useEffect(() => {
    loginRedirect()
      .then((user) => {
        session.set(user);
      })
      .catch(() => {
        setError('Authentication failed. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    loading,
    error,
  };
};
