import React from 'react';
import { useLocalStore } from 'mobx-react';

import PingStore from './ping';

const StoreContext = React.createContext<Store | null>(null);

const createStore = (store: typeof PingStore) => () => store;

type Props = {
  children: React.ReactNode;
};

export const StoreProvider: React.FC<Props> = ({ children }: Props) => {
  const ping = useLocalStore(createStore(PingStore));

  return (
    <StoreContext.Provider value={{ ping }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const store = React.useContext(StoreContext);

  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }

  return store;
};

export type Store = {
  ping: typeof PingStore;
};
