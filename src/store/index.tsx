import React from 'react';
import { useLocalStore } from 'mobx-react';

import TradeStore from './trade';
import SessionStore from './session';

const StoreContext = React.createContext<Store | null>(null);

type Props = {
  children: React.ReactNode;
};

export const StoreProvider: React.FC<Props> = ({ children }: Props) => {
  const trade = useLocalStore(() => TradeStore);
  const session = useLocalStore(() => SessionStore);

  return (
    <StoreContext.Provider value={{ trade, session }}>
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
  session: typeof SessionStore;
};
