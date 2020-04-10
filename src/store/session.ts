import { User } from 'oidc-client';
import { useLocalStore } from 'mobx-react';

export type SessionStore = {
  token: string;
  tokenType: string;
  email: string;
  username: string;
  set: (user: User) => void;
  clear: () => void;
}

export default (): SessionStore => {
  const store = useLocalStore(() => ({
    token: '',
    tokenType: '',
    username: '',
    email: '',
    set: (user: User) => {
      store.token = user.id_token;
      store.tokenType = user.token_type;
      store.username = user.profile.username;
      store.email = user.profile.email;
    },
    clear: () => {
      store.token = '';
      store.tokenType = '';
      store.username = '';
      store.email = '';
    },
  }));

  return store;
};
