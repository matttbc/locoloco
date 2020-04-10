import React from 'react';

import createTradeStore, { TradeStore } from './trade';
import createSessionStore, { SessionStore } from './session';

const StoreContext = React.createContext<Store | null>(null);

type Props = {
  children: React.ReactNode;
};

export const StoreProvider: React.FC<Props> = ({ children }: Props) => {
  const stores = {
    session: createSessionStore(),
    trade: createTradeStore(),
  };

  return (
    <StoreContext.Provider value={{ ...stores }}>
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
  trade?: TradeStore;
  session?: SessionStore;
};
