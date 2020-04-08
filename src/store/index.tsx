import React from 'react';
import { useLocalStore } from 'mobx-react';

import TradeStore from './trade';

const StoreContext = React.createContext<Store | null>(null);

const createStore = (store: typeof TradeStore) => () => store;

type Props = {
  children: React.ReactNode;
};

export const StoreProvider: React.FC<Props> = ({ children }: Props) => {
  const trade = useLocalStore(createStore(TradeStore));

  return (
    <StoreContext.Provider value={{ trade }}>
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
  trade: typeof TradeStore;
};
