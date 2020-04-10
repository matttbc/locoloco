import { useLocalStore } from 'mobx-react';

export type TradeStore = {
  name: string;
}

export default (): TradeStore => {
  const store = useLocalStore(() => ({
    name: '',
  }));

  return store;
};
