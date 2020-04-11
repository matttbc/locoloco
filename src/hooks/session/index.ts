import React from 'react';

import { getUser } from '@services/session';

export const useSession = (session) => {
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
