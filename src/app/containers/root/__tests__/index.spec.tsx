import React from 'react';
import { shallow } from 'enzyme';
import { mocked } from 'ts-jest/utils';

import { useSession } from '@hooks/session';
import { useStore } from '@store';
import App from '..';

jest.mock('@hooks/session', () => ({
  useSession: jest.fn(),
}));

jest.mock('@store', () => ({
  useStore: jest.fn(),
}));

describe('App container', () => {
  const MainRouteComponent = () => (<div>Main route</div>);
  const SecondaryRouteComponent = () => (<div>Secondary route</div>);
  const renderProps = {
    routes: [
      {
        path: '/',
        exact: true,
        component: MainRouteComponent,
      },
      {
        path: '/secondary-route',
        component: SecondaryRouteComponent,
      },
    ],
  };
  const session = {
    token: '',
    tokenType: '',
    email: '',
    username: '',
    set: jest.fn(),
    clear: jest.fn(),
  };


  const mockedUseSession = mocked(useSession);
  const mockedUseStore = mocked(useStore);

  beforeEach(() => {
    mockedUseSession.mockClear();
    mockedUseStore.mockClear();
  });

  describe('render', () => {
    it('should render a Loader component if session loading prop value is truthy', () => {
      mockedUseStore.mockReturnValue({ session });
      mockedUseSession.mockReturnValue({ loading: true });
      const wrapper = shallow(<App {...renderProps} />);
      expect(wrapper.find('Loader').length).toEqual(1);
    });

    it('should render the App component if session loading prop value is falsy', () => {
      mockedUseSession.mockReturnValue({ loading: false });
      const wrapper = shallow(<App {...renderProps} />);
      expect(wrapper.find('App').props()).toMatchObject({
        routes: renderProps.routes,
      });
    });
  });
});
