import { useLocalStore } from 'mobx-react';

export type TradeStore = {
  register: {
    userDetails: {
      firstName: string;
      lastName: string;
      role: string;
      phone: string;
    };
    businessDetails: {
      name: string;
    };
  };
}

export default (): TradeStore => {
  const store = useLocalStore(() => ({
    register: {
      userDetails: {
        firstName: '',
        lastName: '',
        role: '',
        phone: '',
      },
      businessDetails: {
        name: '',
      },
    },
  }));

  return store;
};
