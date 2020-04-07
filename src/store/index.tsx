import React from 'react';
import { useLocalStore } from 'mobx-react';

const StoreContext = React.createContext<Store | null>(null);

const createStore = () => ({
  ping: {
    message: '',
  },
});

type Props = {
  children: React.ReactNode;
};

export const StoreProvider: React.FC<Props> = ({ children }: Props) => {
  const store = useLocalStore(createStore);

  return (
    <StoreContext.Provider value={store}>
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

export type Store = ReturnType<typeof createStore>;
